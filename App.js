import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import ViewRequest from './src/screens/ViewRequest';
import ViewSpesfic from './src/screens/ViewSpesfic';
// import database from './src/screens/database';

//import PrimaryButton from '../../src/screens/PrimaryButton';



const Stack = createNativeStackNavigator();

const App = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                  headerShown: false
            }}>
                {/* <Stack.Screen name="Sign up" component={Signup} /> */}
                {/* <Stack.Screen name="Login" component={Login} /> */}
              <Stack.Screen name="ViewRequest" component={ViewRequest} />
              <Stack.Screen name="ViewSpesfic" component={ViewSpesfic} />
          

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
