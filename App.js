import React, { useState, useEffect } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';
import Signup from './src/screens/Signup';
import Login from './src/screens/Login';
import Loader from './src/screens/Loader';
import Home from './src/screens/Home';


const Stack = createNativeStackNavigator();

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
                    headerStyle: {
                        backgroundColor: '#101010',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerTitleAlign: 'center'
                }}>
                    <Stack.Screen name="Sign up" component={Signup} />
                    <Stack.Screen name="Login" component={Login} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerStyle: {
                    backgroundColor: '#101010',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerTitleAlign: 'center'
            }}>
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};


export default App;

