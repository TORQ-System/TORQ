import React from 'react';
import { StyleSheet, Text, Platform } from 'react-native';

const Title = ({ titleName }) => {
    return (
        <Text style={styles.title}>{titleName}</Text>
    );
}

export default Title;

const styles = StyleSheet.create({
    title: {
        padding: 40,
        marginTop: Platform.OS ==='android'? 50 : 110,
        alignSelf: 'flex-start',
        width: '80%',
        fontSize: 48,
        color: '#FFFFFF',
        fontWeight: 'bold',
        lineHeight: 70,
    }
});