import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageBackground: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: '#0000',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
    }
}
);