import React, { useState } from 'react';
import { styles } from "../../assets/theme/General";
import { styles as formStyles } from "../../assets/theme/Forms";
import { View, Text, TextInput, ImageBackground } from "react-native";
import auth from '@react-native-firebase/auth';
import Toast from 'react-native-toast-message';
import Title from '../components/Title';
import PrimaryButton from '../components/PrimaryButton';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const validateEmail = () => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (email == '')
            setEmailError('email cannot be empty');
        if (reg.test(email) === false)
            setEmailError('invalid email');
        else
            setEmailError('');
    }
    const validatePassword = () => {
        if (password == '')
            setPasswordError('password cannot be empty');
        else if (password.length < 6)
            setPasswordError('password cannot be less than 6 charachters');
        else
            setPasswordError('');
    }

    const login = (email, password) => {
        if (email === '' || password === '')
            Toast.show({
                type: 'error',
                text1: 'Invalid Credentials',
                text2: 'Fields cannot be empty',
                position: 'top',
            });
        else {
            auth()
                .signInWithEmailAndPassword(email, password)
                .then(() => {
                    Toast.show({
                        type: 'success',
                        text1: 'Welcom Back!',
                        text2: 'We\'ve missed you ✌',
                        position: 'top',
                    });
                })
                .catch(error => {
                    if (error.code === 'auth/email-already-in-use') {
                        Toast.show({
                            type: 'error',
                            text1: 'Email',
                            text2: 'Email already in use',
                            position: 'top',
                        });
                    }
                    if (error.code === 'auth/invalid-email') {
                        Toast.show({
                            type: 'error',
                            text1: 'Invalid Email',
                            text2: 'The email you entered is not valid',
                            position: 'top',
                        });
                    }
                    else {
                        Toast.show({
                            type: 'error',
                            text1: 'Invalid Credentials',
                            text2: 'Incorrect email or password',
                            position: 'top',
                        });
                    }
                });
        }
    }

    const signup = () => {
        navigation.navigate('Sign up');
    }

    return (
        <ImageBackground
            source={require('../../assets/images/background.png')}
            style={styles.imageBackground}>
            <Title titleName='Welcome Back' />
            <ImageBackground
                source={require('../../assets/images/Rectangle53.png')}
                style={formStyles.cardImage}>
                <View style={formStyles.card}>
                    <TextInput
                        autoCapitalize='none'
                        onBlur={() => validateEmail()}
                        placeholder='Email..'
                        onChangeText={setEmail}
                        value={email}
                        style={formStyles.textInput}
                        placeholderTextColor='#50A9DB' />
                    <Text style={formStyles.errorText} onPress={() => signup()}>
                        {emailError}
                    </Text>
                    <TextInput
                        placeholder='Password..'
                        onBlur={() => validatePassword()}
                        onChangeText={setPassword}
                        value={password}
                        style={formStyles.textInput}
                        secureTextEntry={true}
                        placeholderTextColor='#50A9DB' />
                    <Text style={formStyles.errorText} onPress={() => signup()}>
                        {passwordError}
                    </Text>
                    <PrimaryButton text='Login' onPress={() => { login(email, password) }} />
                    <Text style={formStyles.smallText} onPress={() => signup()}>
                        Don't have an account? Sign up
                    </Text>
                </View>
            </ImageBackground>
        </ImageBackground>
    );

};

export default Login;
