import React, { useContext, useState } from 'react';
import { styles } from "../../assets/theme/General";
import { styles as formStyles } from "../../assets/theme/Forms";
import { View, Text, TextInput, TouchableOpacity, ImageBackground, ScrollView } from "react-native";
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


    // Gender
    const [gender, setGender] = useState();
    const [genderError, setGenderError] = useState('');
    const radioButtonsData = [{ id: '1', label: 'Male', value: 'M', labelStyle: { color: '#50A9DB' }, }, { id: '2', label: 'Female', value: 'F', labelStyle: { color: '#50A9DB' } }];
    const [radioButtons, setRadioButtons] = useState(radioButtonsData);

    // Date of Birth
    const [date, setDate] = useState(new Date());
    const [dobError, setDobError] = useState('');
    // To open date of birth popup window
    const [open, setOpen] = useState(false);
    // console.log(date.getDate().toString(),date.getMonth().toString(),date.getFullYear().toString());

    // Radio button function 
    function onPressRadioButton(radioButtonsArray) {

        const selectedOption = radioButtonsArray.find((e) => e.selected);
        setGender(selectedOption.value);
        setRadioButtons(radioButtonsArray);

    }
    // Testing Radio Button
    // console.log(gender);

    function DateSelected() {
        return (<Text style={{ color: '#52A4D5' }} > DOB : {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()} </Text>);
    }

    const validateFname = () => {
        // not less than 2 characters and cannot contain spaces or numbers
        let nameFormat = /^[a-zA-Z]+$/;

        if (nameFormat.test(fname) === false) {
            setFnameError('Name cannot contain numbers or spaces');
            return false;
        }
        else if (fname.length < 2) {
            setFnameError('First Name cannot be less than 2 characters');
            return false;
        }
        else {
            setFnameError('');
            return true;
        }
    }
    const validateLname = () => {
        // not less than 2 characters and cannot contain spaces or numbers
        let nameFormat = /^[a-zA-Z]+$/;

        if (nameFormat.test(lname) === false) {
            setLnameError('Name cannot contain numbers or spaces')
        }
        else if (lname.length < 2) {
            setLnameError('Last Name cannot be less than 2 characters');
            return false;
        }
        else {
            setLnameError('');
            return true;
        }
    }

    // I have changed the logic here slightly
    const validateDOB = () => {
        var todaysDate = new Date(); // retrieve current date
        todaysDate = todaysDate.toString().substring(0, 10); // fix the format
        var userDate = date.toString().substring(0, 10);
        // console.log(todaysDate);
        // console.log(userDate);
        if (userDate === todaysDate) {
            setDobError('Please select Date of Birth');
            return false; // false means an error occured
        }
        else {
            setDobError('');
            return true;
        }
    }
    const validateGender = () => {
        if (typeof (gender) === 'undefined') {
            setGenderError('Please select your gender');
        }
        else {
            setGenderError('');
        }
    }
    const nextStep = (fname, lname, gender, date) => {
        if (fname === '' || lname === '' || typeof (gender) === 'undefined' || !validateDOB() || !validateFname() || !validateLname()) {
            validateFname();
            validateLname();
            validateGender();

            Toast.show({
                type: 'error',
                text1: 'Invalid Credentials',
                text2: 'Fields cannot be empty',
                position: 'top',
            });
        }
        else {
            // I have added the substring here 
            navigation.navigate('Next Sign up', { Fname: fname, Lname: lname, Gender: gender, Dob: date.toString().substring(0, 10) });
        }
    }

    const login = () => {
        // Direct user to Login page
        navigation.navigate('Login');
        // navigation.goBack();
    }

    return (
        <ScrollView>
            <ImageBackground
                source={require('../../assets/images/background.png')}
                style={styles.imageBackground}>
                <Title titleName='Join Us' />
                <ImageBackground
                    source={require('../../assets/images/backgroundCard.png')}
                    style={formStyles.cardImage}>
                    <View style={formStyles.signupForm}>
                        <View style={formStyles.inputs}>
                            <TextInput
                                onBlur={() => validateFname()}
                                placeholder='First Name..'
                                onChangeText={setFname}
                                value={fname}
                                style={formStyles.textInput}
                                placeholderTextColor='#50A9DB' />
                            <Text style={formStyles.errorText} onPress={() => nextStep(fname, lname, gender, date)}>
                                {fnameError}
                            </Text>
                            <TextInput
                                onBlur={() => validateLname()}
                                placeholder='Last Name..'
                                onChangeText={setLname}
                                value={lname}
                                style={formStyles.textInput}
                                placeholderTextColor='#50A9DB' />
                            <Text style={formStyles.errorText} onPress={() => nextStep(fname, lname, gender, date)}>
                                {lnameError}
                            </Text>

                            <Text style={{ color: '#50A9DB', fontSize: 16, alignSelf: 'flex-start', marginLeft: 40 }} >Gender</Text>
                            <RadioGroup layout={'row'} radioButtons={radioButtons} onPress={onPressRadioButton} />
                            <Text style={formStyles.errorText} onPress={() => nextStep(fname, lname, gender, date)}>{genderError} </Text>

                            <TouchableOpacity
                                style={{
                                    fontSize: 16,
                                    width: '80%',
                                    borderBottomWidth: 2,
                                    borderColor: '#6FB6DF',
                                    padding: 5,
                                    color: '#50A9DB',
                                    marginBottom: 16,
                                }}
                                onPress={() => setOpen(true)} >
                                <Text style={{ color: '#50A9DB', fontSize: 16 }} >Select Date of birth</Text>
                            </TouchableOpacity>

                            {/* {Date Picker from https://github.com/henninghall/react-native-date-picker#:~:text=Fork%20161-,React%20Native%20Date%20Picker%20is%20datetime%20picker%20for%20Android%20and,possible%20look,%20feel%20and%20performance. */}
                            <Text>  {DateSelected()} </Text>
                            <DatePicker
                                modal={true}
                                androidVariant='nativeAndroid'
                                open={open}
                                date={date}
                                mode='date'
                                title='Select Date of Birth'
                                minimumDate={new Date("1900-12-31")}
                                maximumDate={new Date()}
                                onConfirm={(date) => {
                                    setOpen(false)
                                    setDate(date)
                                }}
                                onCancel={() => {
                                    setOpen(false)
                                }}
                            />
                        </View>
                        <View style={formStyles.actions}>
                            <PrimaryButton text='NEXT' onPress={() => { nextStep(fname, lname, gender, date.toJSON()) }} />
                            <Text style={formStyles.smallText} onPress={() => login()}>
                                Have an account? Login
                            </Text>
                        </View>
                    </View>
                </ImageBackground>
            </ImageBackground>
        </ScrollView>
    );
};

export default Signup;