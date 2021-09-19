import React, { useContext, useState } from 'react';
import { styles } from "../../assets/theme/General";
import { styles as formStyles } from "../../assets/theme/Forms";
import { View, Text, TextInput, TouchableOpacity, ImageBackground} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import Toast from 'react-native-toast-message';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import Title from '../components/Title';
import PrimaryButton from '../components/PrimaryButton';
import RadioGroup from 'react-native-radio-buttons-group';
import DatePicker from 'react-native-date-picker'

const Signup = ({ navigation }) => {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [fnameError, setFnameError] = useState('');
    const [lnameError, setLnameError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    //User table in database
    const newReference = database().ref('/User').push();

     // Gender
    const [gender, setGender] = useState('');
    const radioButtonsData = [ { id: '1' , label: 'Male' , value: 'M', labelStyle:{color: '#50A9DB'} }, { id:'2', label: 'Female' , value: 'F', labelStyle:{color: '#50A9DB'}  } ];
     
    const [radioButtons, setRadioButtons] = useState(radioButtonsData);
 
    // Date of Birth
    // const [dob, setDob] = useState('00/00/0000');
    const [date, setDate] = useState(new Date());
    // const [dobError, setDobError] = useState('');
  
    const [open, setOpen] = useState(false)
   
     // Radio button function 
     function onPressRadioButton(radioButtonsArray) {
     
        let selected = radioButtonsArray.find((e) => e.selected);
        setGender(selected.value);
        setRadioButtons(radioButtonsArray);
        console.log({gender});

        
        // console.log(radioButtonsArray);
        //  selectedButton = radioButtonsArray.find(e => e.selected == true);
        //  selectedButton = selectedButton ? selectedButton.value : radioButtonsArray[0].label;
         
        //  setGender(selectedButton);
        
        //  alert(selected.value);
        //  selectedRadioButton = {selectedButton};
        //  setGender(selectedRadioButton);
        //  if(selectedButton === 'F'){
        //     
        //  }
        //  else{
        //     setGender('F');
        // }
            
        // console.log({gender});
         
     }
    
      function DateSelected() {
         return (<Text> DOB : {date.getDate()}/{date.getMonth()+1}/{date.getFullYear()} </Text>);
       }

    // newReference.set({ Fname: 'Aleen', Lname:'Wael', Email:'aleen@gmail.com', password:'aa123456', }).then(() => console.log('Data updated.'));
   
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
    const validateFname = () =>{
        // not less than 2 characters for both fname & lname
        if(fname.length < 2)
            setFnameError('First Name cannot be less than 2 characters');
        else 
            setFnameError('');
    }
    const validateLname = () =>{
        // not less than 2 characters for both fname & lname
        if(lname.length < 2)
            setLnameError('Last Name cannot be less than 2 characters');
        else 
            setLnameError('');
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
    // const validateDOB = () => {
    //     // greater than 18?
    //     todaysYear = new Date().getFullYear();
    //     dobValidation = (todaysYear - date.getFullYear());
    //     if(dobValidation >= 18){
    //         console.log(dobValidation);
    //         setDobError('');
    //     }
    //     else{
    //         console.log('You must be greater than 18');
    //         setDobError('You must be greater than 18');
    //     }
    // }
    const validateGender = () => {
        // if(radioButtonsData){

        // }
    }


    const signup = (email, password,fname,lname) => {
        if (email === '' || password === '' || fname ==='' || lname==='')
            Toast.show({
                type: 'error',
                text1: 'Invalid Credentials',
                text2: 'Fields cannot be empty',
                position: 'top',
            });
            // This step should be in the next page
            else{
                auth()
                .createUserWithEmailAndPassword(email, password)
                .then(() => {
                    newReference.set({ Fname:fname, Lname:lname, Email:email, Password:password, }).then(() => console.log('Data updated.')); 
                    alert('success');
                     })
                .catch( error => {
                    
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


    const login = () => {
        // Direct user to Login page
        navigation.navigate('Login');
        // navigation.goBack();
    }

    const NextSignup = () => {
        navigation.navigate('Next Sign up');
    }

    return (
        <ImageBackground
            source={require('../../assets/images/background.png')}
            style={styles.imageBackground}>
            <Title titleName='Join Us' />
            <ImageBackground
                source={require('../../assets/images/Rectangle53.png')}
                style={formStyles.cardImage}>
                <View style={formStyles.card}>
                    <TextInput
                        onBlur={() => validateFname()}
                        placeholder='First Name..'
                        onChangeText={setFname}
                        value={fname}
                        style={formStyles.textInput}
                        placeholderTextColor='#50A9DB' />
                    <Text style={formStyles.errorText} onPress={() => signup()}>
                        {fnameError}
                    </Text>
                    <TextInput
                        onBlur={() => validateLname()}
                        placeholder='Last Name..'
                        onChangeText={setLname}
                        value={lname}
                        style={formStyles.textInput}
                        placeholderTextColor='#50A9DB' />
                    <Text style={formStyles.errorText} onPress={() => signup()}>
                        {lnameError}
                    </Text>
                        
                    <Text style={{fontSize: 16,
                        width: '80%',
                        borderBottomWidth: 2,
                        borderColor: '#6FB6DF',
                        padding: 0,
                        color: '#50A9DB',
                        marginBottom: 0,
                        marginTop: 0,
                    }} > Gender </Text>
                    <RadioGroup layout={'row'} radioButtons={radioButtons} onPress={onPressRadioButton} />

                     <>
                     <TouchableOpacity
                        style={{fontSize: 16,
                        width: '80%',
                        borderBottomWidth: 2,
                        borderColor: '#6FB6DF',
                        padding: 5,
                        color: '#50A9DB',
                        marginBottom: 16,
                        marginTop: 16,
                    }}
                        onPress={() => setOpen(true)}
                    > 
                        <Text style={{color: '#50A9DB',fontSize: 16}} >Select Date of birth</Text>
                    </TouchableOpacity>
                    
                  {/* {Date Picker from https://github.com/henninghall/react-native-date-picker#:~:text=Fork%20161-,React%20Native%20Date%20Picker%20is%20datetime%20picker%20for%20Android%20and,possible%20look,%20feel%20and%20performance. */}
                  <Text>  {DateSelected()} </Text>
                  <DatePicker
                     modal
                     open={open}
                     date={date}
                     mode='date'
                     title='Select Date of Birth'
                     minimumDate = {new Date("1900-12-31")}
                     maximumDate = {new Date()}
                     onConfirm={(date) => {
                     setOpen(false)
                     setDate(date)
                     }}
                     onCancel={() => {
                     setOpen(false)
                     }}
                     />
                    </>
                    {/* <Text style={formStyles.errorText} onPress={() => signup()}>
                        {dobError}
                    </Text>   */}
                    {/* <TextInput
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
                    </Text> */}
                    
                    {/* <PrimaryButton text='NEXT' onPress={() => {navigation.navigate('Next Sign up')}} /> */}
                    <PrimaryButton text='SIGN UP' onPress={() => signup(email, password,fname,lname)} />
                    <Text style={formStyles.smallText} onPress={() => login()}>
                        Have an account? Login
                    </Text>
                    
                </View>
            </ImageBackground>
        </ImageBackground>
    );
};

export default Signup;