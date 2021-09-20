import React, { useContext, useState } from 'react';
import { styles } from "../../assets/theme/General";
import { styles as formStyles } from "../../assets/theme/Forms";
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Button, ScrollView} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import Toast from 'react-native-toast-message';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import Title from '../components/Title';
import PrimaryButton from '../components/PrimaryButton';
import RadioGroup from 'react-native-radio-buttons-group';
import DatePicker from 'react-native-date-picker'

const nextSignup = ({ route,navigation }) => {
    
    //User table in database
    const DBReference = database().ref('/User').push();

    // Email an Password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    // Phone Number
    const [phone, setPhone] = useState('');
    const [phoneError, setPhoneError] = useState('');
    // National ID
    const [nationalID, setNationalID] = useState('');
    const [nationalIDError, setNationalIDError] = useState('');

    // ----------Getting Passed Parameters from prev screen----------
    const { Fname, Lname, Gender, Dob } = route.params;
    // const {fname} = route.getParam('Fname');
    // console.log(Fname);
    // const lname = navigation.getParam('Lname');
    // console.log(Lname);
    // const gender = navigation.getParam('Gender');
    // console.log(Gender);
    // const dob = navigation.getParam('Dob');
    // console.log(Dob);
    // Date should be extracted 
    // dob = {{dob.getDate()}/{dob.getMonth() + 1}/{dob.getFullYear()}};
    
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

    const validatePhone = () =>{
        let phoneFormat = /^(0|05|05[0-9]{1,9})$/;
        if(phone === ''){
            setPhoneError('Phone Number cannot be empty');
        }
        //starts with 05
        else if(phoneFormat.test(phone)===false||phone.length !==10){
            setPhoneError('Invalid Phone Number');
        }
        else{
            setPhoneError('');
        }
        
    }
    const validateNationalID = () =>{
        if(nationalID === ''){
            setNationalIDError('National ID cannot be empty');
        }
        else if (nationalID.length !==10){
            setNationalIDError('Invalid National ID');
        }
        else{
            setNationalIDError('');
        }
    }

    const login = () => {
        // Direct user to Login page
        navigation.navigate('Login');
    }
    const signup = (Fname,Lname,Gender,Dob,phone, nationalID,email, password) => {
        if (phone === '' || nationalID === '' || email === '' || password === ''){
            validatePhone();
            validateNationalID();
            validateEmail();
            validatePassword();
            Toast.show({
                type: 'error',
                text1: 'Invalid Credentials',
                text2: 'Fields cannot be empty',
                position: 'top',
            });
        }
        // If the user entered an email we will chcek whether its domain is of the SRCA
        else if (email != '') {
            let emailDomain = email.substring(email.indexOf('@') + 1); // extracting the domain
            // if the domain is the SRCA we will display a toast and NOT sign them up
            if (emailDomain === 'srca.org.sa') {
                Toast.show({
                    type: 'error',
                    text1: 'Incorrect Email',
                    text2: 'Email domain is restricted',
                    position: 'top',
                });
            }
            // This step should be in the next page
            else {
                auth()
                    .createUserWithEmailAndPassword(email, password)
                    .then(() => {
                        DBReference.set({ Fname: Fname, Lname: Lname,Gender: Gender,DOB: Dob,Phone: phone,NID: nationalID,Email: email, Password: password, }).then(() => console.log('Data updated.'));
                        alert('success');
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
        }
    }

    return (
        <ImageBackground
            source={require('../../assets/images/background.png')}
            style={styles.imageBackground}>
            <Title titleName='Join Us' />
            <ImageBackground
                source={require('../../assets/images/Rectangle53.png')}
                style={formStyles.cardImage}
                >
                <View style={formStyles.card}>
                    
                    <TextInput
                        onBlur={() => validatePhone()}
                        placeholder='Phone Number'
                        onChangeText={setPhone}
                        value={phone}
                        keyboardType = 'number-pad'
                        maxLength = {10}
                        style={formStyles.textInput}
                        placeholderTextColor='#50A9DB' />
                    <Text style={formStyles.errorText} onPress={() => signup(Fname,Lname,Gender,Dob,phone, nationalID,email, password)}>
                        {phoneError}
                    </Text>
                    <TextInput
                        onBlur={() => validateNationalID()}
                        placeholder='National ID'
                        onChangeText={setNationalID}
                        value={nationalID}
                        keyboardType = 'number-pad'
                        maxLength = {10}
                        style={formStyles.textInput}
                        placeholderTextColor='#50A9DB' />
                    <Text style={formStyles.errorText} onPress={() => signup(Fname,Lname,Gender,Dob,phone, nationalID,email, password)}>
                        {nationalIDError}
                    </Text>
                    <TextInput
                        onBlur={() => validateEmail()}
                        placeholder='Email..'
                        onChangeText={setEmail}
                        value={email}
                        style={formStyles.textInput}
                        placeholderTextColor='#50A9DB' />
                    <Text style={formStyles.errorText} onPress={() => signup(Fname,Lname,Gender,Dob,phone, nationalID,email, password)}>
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
                    <Text style={formStyles.errorText} onPress={() => signup(Fname,Lname,Gender,Dob,phone, nationalID,email, password)}>
                        {passwordError}
                    </Text>
                    {/* <PrimaryButton text='NEXT' /> */}
                    <PrimaryButton text='SIGN UP' onPress={() => signup(Fname,Lname,Gender,Dob,phone, nationalID,email, password)} />
                    <Text style={formStyles.smallText} onPress={() => login()}>
                        Have an account? Login
                    </Text>
                    
                </View>
            </ImageBackground>
        </ImageBackground>
    );
};

export default nextSignup;