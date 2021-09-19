import { Dimensions, StyleSheet, View } from 'react-native';

export const styles = StyleSheet.create({
    textDark: {
        fontSize: 18,
        color: '#FFF',
    },
    textLight: {
        fontSize: 18,
        color: '#FFF',
    },
    textInput: {
        fontSize: 16,
        width: '80%',
        borderBottomWidth: 2,
        borderColor: '#6FB6DF',
        padding: 5,
        color: '#50A9DB',
        marginBottom: 16,
    },
    smallText: {
        fontWeight: 'bold',
        color: '#52A4D5',
        alignSelf: 'center',
        margin: 10,
    },
    errorText: {
        color: 'red',
        alignSelf: 'flex-start',
        marginTop: 0,
        marginBottom: 0,
        padding: 0,
        marginLeft: 40,
        fontSize: 12,
    },
    card: {
        marginTop: '25%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 50,
    },
    cardImage: {
        height: Dimensions.get('window').width * 1.48 , // applied to Image
        width: Dimensions.get('window').width,
        flex: 1,
        marginTop: 60,
        justifyContent: 'center',
        
    },

    SelectDropdown: {
        backgroundColor: '#EDEDED',
        borderBottomColor: '#6FB6DF',
        width: 50,
    },
    dropdownTextStyle: {
        color: "#50A9DB",
    },
    
}
);