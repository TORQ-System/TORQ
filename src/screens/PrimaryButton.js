import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const PrimaryButton = ({ text,onPress}) => {
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
        borderRadius: 40,
    },
    buttonPrimary: {
        marginTop: 10,
        width: '18%',
        height: 24,
        marginHorizontal:14
    },
    textDark: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold'
    },
});