import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from '../../assets/theme/General';
import auth from '@react-native-firebase/auth';

const Home = () => {

    const logout = () => {
        auth().signOut();
    }

    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <TouchableOpacity style={styles.buttonPrimary} onPress={() => logout()}>
                <LinearGradient colors={['#0588D0', '#0588D0', '#4DBDC2']} style={styles.gradient} useAngle={true} angle={145} angleCenter={{ x: 0.5, y: 0.5 }}  >
                    <Text style={styles.textDark}>logout</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    );
}

export default Home;