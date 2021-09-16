import React, { useContext, useState } from 'react';
import { styles } from "../../assets/theme/General";
import { styles as formStyles } from "../../assets/theme/Forms";
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Button} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';
import Title from '../components/Title';
import PrimaryButton from '../components/PrimaryButton';
import {Picker} from '@react-native-picker/picker';
import SelectDropdown from 'react-native-select-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';



const nextSignup = ({ navigation }) => {
    const [fname, setfname] = useState('');
    const [lname, setLname] = useState('');
    const [phone, setPhone] = useState('');
    const [nationalID, setNationalID] = useState('');
    const [gender, setGender] = useState('none');
    const [dob, setDob] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
      };
    
      const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
      };
    
      const showDatepicker = () => {
        showMode('date');
      };
      
      const showTimepicker = () => {
        showMode('time');
      };
    

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
                    <Text style={formStyles.textInput} > Gender </Text>
                    <SelectDropdown
                        defaultButtonText={['Select']}
                        dropdownStyle={formStyles.SelectDropdown}
                        buttonTextStyle={formStyles.dropdownTextStyle}
	                    data={['Male','Female']}
	                    onSelect={(selectedItem, index) => {
		                console.log(selectedItem, index)
	                    }}
	                    buttonTextAfterSelection={(selectedItem, index) => {
		                // text represented after item is selected
		                // if data array is an array of objects then return selectedItem.property to render after item is selected
		                return selectedItem
	                    }}
	                    rowTextForSelection={(item, index) => {
		                // text represented for each item in dropdown
		                // if data array is an array of objects then return item.property to represent item in dropdown
		                return item
	                    }}
                    />
                    
                    <Text style={formStyles.textInput} > Date of Birth </Text>
                    <View>
                         <View>
                             <Button onPress={showDatepicker} title="Show date picker!" />
                        </View>
                     {/* <View>
                              <Button onPress={showTimepicker} title="Show time picker!" />
                    </View> */}
                         {show && (
                             <DateTimePicker
                             testID="dateTimePicker"
                             value={date}
                             mode={mode}
                             is24Hour={true}
                              display="spinner"
                              onChange={onChange}
                         />
                      )}
                    </View>

                    {/* <Button onPress={() => showMode('date')} title="Select" style={{color:'#50A9DB'}} />
                    <Button onPress={showTimepicker} title="Show time picker!" />
                    
                    {show && ( <DateTimePicker
                        testID="dateTimePicker"
                        style={{height:150, color: '#50A9DB', backgroundColor: 'red'}}
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display="spinner"
                        onChange={onChange}
                    />
                    )} */}
                    <PrimaryButton text='SIGN UP' />
                    <Text style={formStyles.smallText} onPress={() => login()}>
                        Have an account? Login
                    </Text>
                    
                </View>
            </ImageBackground>
        </ImageBackground>
    );
};

export default nextSignup;