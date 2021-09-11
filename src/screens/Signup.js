import React from 'react';
import { View, Text, Button } from "react-native";
import { styles } from "../../assets/theme/General";


const Signup = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textDark}>signup screen will be here</Text>
            <Button
                title="Go to Login"
                onPress={() => navigation.navigate('Login')}
            />
        </View>
    );

};

export default Signup;