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
    card: {
        marginTop: '25%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 50,
    },
    cardImage: {
        height: Dimensions.get('window').width * 1.20, // applied to Image
        width: Dimensions.get('window').width,
        flex: 1,
        justifyContent: 'center',
    }
}
);