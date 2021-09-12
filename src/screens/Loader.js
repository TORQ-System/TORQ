import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { styles } from '../../assets/theme/General';

const Loader = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator color='#4DBDC2' size='large' />
        </View>
    );
}

export default Loader;