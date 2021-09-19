import React, { useContext, useState } from 'react';
import { styles } from "../../assets/theme/General";
import { styles as formStyles } from "../../assets/theme/Forms";
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Button, ScrollView} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';
import Title from '../components/Title';
import PrimaryButton from '../components/PrimaryButton';
import RadioGroup from 'react-native-radio-buttons-group';
import DatePicker from 'react-native-date-picker'

const nextSignup = ({ navigation }) => {

    // Phone Number
    const [phone, setPhone] = useState('');
    // National ID
    const [nationalID, setNationalID] = useState('');
    // Gender
    const [gender, setGender] = useState('none');
    const radioButtonsData = [ { id: '1' , label: 'Male' , value: 'M', labelStyle:{color: '#50A9DB'} }, 
                               { id:'2', label: 'Female' , value: 'F', labelStyle:{color: '#50A9DB'}} ];
    
    const [radioButtons, setRadioButtons] = useState(radioButtonsData)

    // Date of Birth
    const [dob, setDob] = useState('00/00/0000');
    const [date, setDate] = useState(new Date());
 
    const [open, setOpen] = useState(false)

    function onPressRadioButton(radioButtonsArray) {
        setRadioButtons(radioButtonsArray);
    }
   
     function DateSelected() {
        return (<Text> DOB : {date.getDate()}/{date.getMonth()+1}/{date.getFullYear()} </Text>);
      }
      
    //   function DateNotSelected(props) {
    //     return (<Text> Please select Date of Birth </Text>);
    //   }
    //   function OnDateSelected(props) {
    //     const isSelected = props.isSelected;
    //     if (isSelected) {
    //       return <DateSelected />;
    //     }
    //     return <DateNotSelected />;
    //   }

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

    const login = () => {
        // Direct user to Login page
        navigation.navigate('Login');
    }

    // const nextSignup = () => {
    //     navigation.navigate('nextSignup');
    // }

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
                        // onBlur={() => validatePhone()}
                        placeholder='Phone Number'
                        onChangeText={setPhone}
                        value={phone}
                        keyboardType = 'number-pad'
                        maxLength = {10}
                        style={formStyles.textInput}
                        placeholderTextColor='#50A9DB' />
                    <TextInput
                        // onBlur={() => validateNationalID()}
                        placeholder='National ID'
                        onChangeText={setNationalID}
                        value={nationalID}
                        keyboardType = 'number-pad'
                        maxLength = {10}
                        style={formStyles.textInput}
                        placeholderTextColor='#50A9DB' />
                        
                    <Text style={formStyles.textInput} > Gender </Text>
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
                    
                  {/* Date Picker from https://github.com/henninghall/react-native-date-picker#:~:text=Fork%20161-,React%20Native%20Date%20Picker%20is%20datetime%20picker%20for%20Android%20and,possible%20look,%20feel%20and%20performance. */}
                  <Text>  {DateSelected()} </Text>
                  <DatePicker
                     modal
                     open={open}
                     date={date}
                     mode='date'
                     title='Select Date of Birth'
                     minimumDate = {new Date("1940-12-31")}
                     maximumDate = {new Date("2003-12-31")}
                     onConfirm={(date) => {
                     setOpen(false)
                     setDate(date)
                     }}
                     onCancel={() => {
                     setOpen(false)
                     }}
                     />
                    </>
                   
                    <PrimaryButton text='NEXT' />
                    <Text style={formStyles.smallText} onPress={() => login()}>
                        Have an account? Login
                    </Text>
                    
                </View>
            </ImageBackground>
        </ImageBackground>
    );
};

export default nextSignup;