import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#101010',
    },
    bootsplash: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#101010",
    },
    textDark: {
        fontSize: 18,
        color: '#FFF',
    },
    logo: {
        height: 100,
        width: 100,
    },
    textInput: {
        width: '80%',
        borderBottomWidth: 1,
        borderColor: '#6FB6DF',
        padding: 10,
        marginBottom: 20,
    },
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    buttonPrimary: {
        marginTop: 20,
        width: '80%',
        height: 40,
    },
    smallText: {
        color: '#4DBDC2',
        marginTop: 20,
        alignSelf: 'flex-start',
        marginLeft: 40,
    },
    errorText: {
        color: 'red',
        alignSelf: 'flex-start',
        margin: 0,
        padding: 0,
        marginLeft: 40,
        fontSize: 12,
    },
}
);