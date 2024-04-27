import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const RegistrationScreen = ({ navigation }) => {
    const goToSignIn = () => {
        navigation.navigate('SignInScreen');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>Welcome back</Text>
            <Text style={styles.subtitleText}>Please fill in the following details to create an account:</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your Full name"
                placeholderTextColor="#999"
            />
            <TextInput
                style={styles.input}
                placeholder="Enter your email"
                placeholderTextColor="#999"
            />
            <TextInput
                style={styles.input}
                placeholder="Enter your password"
                placeholderTextColor="#999"
                secureTextEntry={true}
            />
            <TextInput
                style={styles.input}
                placeholder="Confirm password"
                placeholderTextColor="#999"
                secureTextEntry={true}
            />
            <TouchableOpacity style={styles.registerButton}>
                <Text style={styles.registerButtonText}>Register</Text>
            </TouchableOpacity>
            <View style={styles.signInContainer}>
                <Text style={styles.signInText}>Already have an account?</Text>
                <TouchableOpacity onPress={goToSignIn}>
                    <Text style={styles.signInButton}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    welcomeText: {
        fontSize: 24,
        marginBottom: 20,
    },
    subtitleText: {
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#f2f2f2',
        borderRadius: 10,
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    registerButton: {
        backgroundColor: '#50C2C9',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
        marginBottom: 20,
    },
    registerButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    signInContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    signInText: {
        marginRight: 5,
    },
    signInButton: {
        color: '#50C2C9',
        fontWeight: 'bold',
    },
});

export default RegistrationScreen;
