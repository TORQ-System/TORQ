import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../assets/theme/General';
import auth from '@react-native-firebase/auth';
import PrimaryButton from '../components/PrimaryButton';

const Home = ({ email, isUser }) => {

    const logout = () => {
        auth().signOut();
    }

    if (isUser === 0) {
        return (
            <View style={styles.container}>
                <Text>This is a paramedic screen</Text>
                <PrimaryButton text='Logout' onPress={() => { logout() }} />
            </View>
        );
    }
    return (
        <View style={styles.container}>
            <Text>This is a user screen</Text>
            <PrimaryButton text='Logout' onPress={() => { logout() }} />
        </View>
    );
}

export default Home;