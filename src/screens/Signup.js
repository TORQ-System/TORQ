import React, { useContext, useState } from 'react';
import { styles } from "../../assets/theme/General";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';

const Signup = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signup = (email, password) => {
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                alert('success')
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    alert('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    alert('That email address is invalid!');
                }

                console.error(error);
            });
    }

    const login = () => {
        navigation.navigate('Login');
    }

    return (
        <View style={styles.container}>
            <TextInput placeholder='Email..' onChangeText={setEmail} value={email} style={styles.textInput} />
            <TextInput placeholder='Password..' onChangeText={setPassword} value={password} style={styles.textInput} secureTextEntry={true} />
            <TouchableOpacity
                style={styles.buttonPrimary}
                onPress={() => signup(email, password)}
            >
                <LinearGradient colors={['#0588D0', '#0588D0', '#4DBDC2']} style={styles.gradient} useAngle={true} angle={145} angleCenter={{ x: 0.5, y: 0.5 }}  >
                    <Text style={styles.textDark}>Sign up</Text>
                </LinearGradient>
            </TouchableOpacity>
            <Text style={styles.smallText} onPress={() => login()}>  Have an account? Login</Text>

        </View>
    );

};

export default Signup;