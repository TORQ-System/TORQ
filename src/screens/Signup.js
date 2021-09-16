import React, { useContext, useState } from 'react';
import { styles } from "../../assets/theme/General";
import { styles as formStyles } from "../../assets/theme/Forms";
import { View, Text, TextInput, TouchableOpacity, ImageBackground} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';
import Title from '../components/Title';
import PrimaryButton from '../components/PrimaryButton';
import {Picker} from '@react-native-picker/picker';
import SelectDropdown from 'react-native-select-dropdown';

const Signup = ({ navigation }) => {
    const [fname, setfname] = useState('');
    const [lname, setLname] = useState('');
    const [phone, setPhone] = useState('');
    const [nationalID, setNationalID] = useState('');
    const [gender, setGender] = useState('none');
    const [dob, setDob] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const validateName = () =>{
        // not less than 2 characters for both fname & lname
    }
    const validatePhone = () =>{
        //numbers only
        //starts with 05
        //length == 10
    }
    const validateNationalID = () =>{
        // numbers only
        // length == 10
    }
    const validateDOB = () => {
        // greater than 18?
    }


    // const signup = (email, password) => {
    //     auth()
    //         .createUserWithEmailAndPassword(email, password)
    //         .then(() => {
    //             alert('success')
    //         })
    //         .catch(error => {
    //             if (error.code === 'auth/email-already-in-use') {
    //                 alert('That email address is already in use!');
    //             }

    //             if (error.code === 'auth/invalid-email') {
    //                 alert('That email address is invalid!');
    //             }

    //             console.error(error);
    //         });
    // }

    const login = () => {
        // Direct user to Login page
        navigation.navigate('Login');
        // navigation.goBack();
    }

    const NextSignup = () => {
        navigation.navigate('Next Sign up');
    }

    return (
        // <View style={styles.container}>
        //     <ImageBackground source={require('../../assets/images/background.png')} style={styles.imageBackground}/>
        //     <ImageBackground
        //         source={require('../../assets/images/cardLight.png')}
        //         style={formStyles.cardImage}>
        //          <TextInput placeholder='Email..' onChangeText={setEmail} value={email} style={formStyles.textInput} placeholderTextColor='#50A9DB' />
        //          <TextInput placeholder='Password..' onChangeText={setPassword} value={password} style={formStyles.textInput} placeholderTextColor='#50A9DB' secureTextEntry={true} />
        //          <TouchableOpacity
        //             style={styles.buttonPrimary}
        //             onPress={() => signup(email, password)}
        //          >
        //         <LinearGradient colors={['#0588D0', '#0588D0', '#4DBDC2']} style={styles.gradient} useAngle={true} angle={145} angleCenter={{ x: 0.5, y: 0.5 }}  >
        //             <Text style={styles.textDark}>Sign up</Text>
        //         </LinearGradient>
        //     </TouchableOpacity>
        //     <Text style={styles.smallText} onPress={() => login()}>  Have an account? Login</Text>
        //     </ImageBackground>
        // </View>
        <ImageBackground
            source={require('../../assets/images/background.png')}
            style={styles.imageBackground}>
            <Title titleName='Join Us' />
            <ImageBackground
                source={require('../../assets/images/Rectangle53.png')}
                style={formStyles.cardImage}>
                <View style={formStyles.card}>
                    <TextInput
                        // onBlur={() => validateName()}
                        placeholder='First Name..'
                        // onChangeText={setFname}
                        value={fname}
                        style={formStyles.textInput}
                        placeholderTextColor='#50A9DB' />
                    <TextInput
                        // onBlur={() => validateName()}
                        placeholder='Last Name..'
                        // onChangeText={setLname}
                        value={lname}
                        style={formStyles.textInput}
                        placeholderTextColor='#50A9DB' />
             
                    {/* <Picker
                        onValueChange={(value, index) => setGender(value)}
                        selectedValue={gender}
                        mode='dropdown'
                        style={formStyles.picker}
                        >
                        <Picker.Item label="Gender" value="none"/>
                        <Picker.Item label="Male" value="M" />
                        <Picker.Item label="Female" value="F" />
                    </Picker> */}
                   
                    <TextInput
                        // onBlur={() => validateEmail()}
                        placeholder='Email..'
                        // onChangeText={setEmail}
                        value={email}
                        style={formStyles.textInput}
                        placeholderTextColor='#50A9DB' />
                    
                    <TextInput
                        placeholder='Password..'
                        // onBlur={() => validatePassword()}
                        // onChangeText={setPassword}
                        value={password}
                        style={formStyles.textInput}
                        secureTextEntry={true}
                        placeholderTextColor='#50A9DB' />
                    
                    <PrimaryButton text='NEXT' onPress={() => {navigation.navigate('Next Sign up')}} />
                    <Text style={formStyles.smallText} onPress={() => login()}>
                        Have an account? Login
                    </Text>
                    
                </View>
            </ImageBackground>
        </ImageBackground>
    );
};

export default Signup;