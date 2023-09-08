import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';

const Loader = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../imgs/CookBookLogo.jpg')} 
                style={styles.image}
            />
            <ProgressBar
                indeterminate={true}
                width={200}
                color={'#ffffff'}
                style={styles.progress}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        backgroundColor: '#E89452',
        zIndex: 1,
        marginBottom: 450,
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 10,
    },
});
export default Loader;