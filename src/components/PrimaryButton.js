import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const PrimaryButton = ({ text, onPress }) => {
    return (
        <TouchableOpacity
            style={style.buttonPrimary}
            onPress={onPress}>
            <LinearGradient
                colors={['#0588D0', '#4DBDC2']}
                style={style.gradient}
                useAngle={true}
                angle={145}
                angleCenter={{ x: 0.5, y: 0.5 }}>
                <Text style={style.textDark}>{text}</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
}

export default PrimaryButton;

const style = StyleSheet.create({
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 19,
    },
    buttonPrimary: {
        marginTop: 20,
        width: '60%',
        height: 45,
    },
    textDark: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold'
    },
});