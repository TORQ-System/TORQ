import React, { useContext, useState } from 'react';
import { styles } from "../../assets/theme/General";
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const validateEmail = () => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

        if (email == '') {
            setEmailError('email cannot be empty')
        }
        if (reg.test(email) === false) {
            setEmailError('invalid email');
        }
        else {
            setEmailError('');
        }

    }
    const validatePassword = () => {
        if (password == '') {
            setPasswordError('password cannot be empty');
        }
        else if (password.length < 6) {
            setPasswordError('password cannot be less than 6 charachters');
        }
        else {
            setPasswordError('');
        }

    }

    const login = (email, password) => {
        if (email === '' || password === '') {
            alert('invalid credentials');
        }
        else {
            auth()
                .signInWithEmailAndPassword(email, password)
                .then(() => {
                    alert('success');
                })
                .catch(error => {
                    if (error.code === 'auth/email-already-in-use') {
                        alert('email already in use');
                    }

                    if (error.code === 'auth/invalid-email') {
                        alert('invalid email');
                    }

                    else {
                        alert('incorrect email or password');

                    }
                });
        }
    }

    const signup = () => {
        navigation.navigate('Sign up');
    }

    return (
        <View style={styles.container}>
            <TextInput
                onBlur={() => validateEmail()}
                placeholder='Email..'
                onChangeText={setEmail}
                value={email}
                style={styles.textInput}
            />

            <Text
                style={styles.errorText}
                onPress={() => signup()}>
                {emailError}
            </Text>

            <TextInput
                placeholder='Password..'
                onBlur={() => validatePassword()}
                onChangeText={setPassword}
                value={password}
                style={styles.textInput}
                secureTextEntry={true}
            />

            <Text
                style={styles.errorText}
                onPress={() => signup()}>
                {passwordError}
            </Text>


            <TouchableOpacity
                style={styles.buttonPrimary}
                onPress={() => login(email, password)}
            >
                <LinearGradient
                    colors={['#0588D0', '#0588D0', '#4DBDC2']}
                    style={styles.gradient}
                    useAngle={true}
                    angle={145}
                    angleCenter={{ x: 0.5, y: 0.5 }}>
                    <Text style={styles.textDark}>Login</Text>
                </LinearGradient>
            </TouchableOpacity>

            <Text
                style={styles.smallText}
                onPress={() => signup()}>
                Don't have an account? Sign up
            </Text>

        </View>
    );

};

export default Login;
