import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
        color: '#50A9DB'
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
        marginTop: 5,
        marginBottom: 5,
        padding: 0,
        marginLeft: 40,
        fontSize: 12,
    },
    cardImage: {
        height: Dimensions.get('window').height * (0.65),// applied to Image
        width: Dimensions.get('window').width,
        flex: 1,
        alignSelf: 'flex-end',
        justifyContent: 'center',

    },
    form: {
        flex: 1,
        justifyContent: 'center',
    },
    signupForm: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    inputs: {
        paddingTop: 40,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    actions: {
        justifyContent: 'flex-start',
        alignItems: 'center',
    }
}
);