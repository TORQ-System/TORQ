import React, { useState, useEffect } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';
import Signup from './src/screens/Signup';
import Login from './src/screens/Login';
import Loader from './src/screens/Loader';
import Home from './src/screens/Home';
import Toast from 'react-native-toast-message';


const Stack = createNativeStackNavigator();


const App = () => {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
    const roleAuth = (user) => {
        let isUser = -1;
        let emailDomain = user.substring(user.indexOf('@') + 1);
        isUser = (emailDomain === 'srca.org.sa' ? 0 : 1);
        return isUser;
    }

    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) return <Loader></Loader>;

    if (!user) {
        return (
            <NavigationContainer>
                <Stack.Navigator screenOptions={{
                    headerShown: false,
                }}>
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Sign up" component={Signup} />
                </Stack.Navigator>
                <Toast ref={(ref) => Toast.setRef(ref)} />
            </NavigationContainer>
        );
    }

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false,
            }}>
                <Stack.Screen name="Home">
                    {(props) => <Home  {...props} email={user.email} isUser={roleAuth(user.email)} />}
                </Stack.Screen>
            </Stack.Navigator>
            <Toast ref={(ref) => Toast.setRef(ref)} />
        </NavigationContainer>

    );
};


export default App;

