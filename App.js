import React, { useState, useEffect } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';
import Signup from './src/screens/Signup';
import Login from './src/screens/Login';
import Loader from './src/screens/Loader';
import Home from './src/screens/Home';
import Toast, { ErrorToast, SuccessToast } from 'react-native-toast-message';


const Stack = createNativeStackNavigator();

const toastConfig = {
    error: (props) => (
        <ErrorToast
            {...props}
            text1Style={{
                fontSize: 17,
                color: '#F3F3F3'
            }}
            text2Style={{
                fontSize: 15,
                color: '#F3F3F3'
            }}
            contentContainerStyle={{
                backgroundColor: '#333'
            }}
            leadingIconContainerStyle={{
                backgroundColor: '#333'
            }}
            trailingIconContainerStyle={{
                backgroundColor: '#333'
            }}
        />
    ),
    success: (props) => (
        <SuccessToast
            {...props}
            text1Style={{
                fontSize: 17,
                color: '#F3F3F3'
            }}
            text2Style={{
                fontSize: 15,
                color: '#F3F3F3'
            }}
            contentContainerStyle={{
                backgroundColor: '#333'
            }}
            leadingIconContainerStyle={{
                backgroundColor: '#333'
            }}
            trailingIconContainerStyle={{
                backgroundColor: '#333'
            }}
        />
    ),
}


const App = () => {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

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
                <Toast config={toastConfig} ref={(ref) => Toast.setRef(ref)} />
            </NavigationContainer>
        );
    }

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false,
            }}>
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
            <Toast config={toastConfig} ref={(ref) => Toast.setRef(ref)} />
        </NavigationContainer>

    );
};


export default App;

