import React from 'react';
import { View, Text, Button } from "react-native";

import { styles } from "../../assets/theme/General";

const Login = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textDark}>login screen will be here</Text>
            <Button
                title="Go to View"
                onPress={() => navigation.navigate('ViewRequest')}
            />
        </View>
    );

};

export default Login;