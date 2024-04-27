import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const SplashScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image source={require('./assets\recyzen-app-high-resolution-logo-transparent.png')} style={styles.logo} />
            <Text style={styles.text}>Welcome to RecyZen</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RegistrationScreen')}>
                <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    text: {
        fontSize: 20,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#50C2C9',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default SplashScreen;
