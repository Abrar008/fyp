import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const SignInScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>Welcome back</Text>
            <Image source={require('./assets\recyzen-app-high-resolution-logo-transparent.png')} style={styles.logo} />
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
            <TouchableOpacity>
                <Text style={styles.forgotPassword}>Forgot password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signInButton}>
                <Text style={styles.signInButtonText}>Sign in</Text>
            </TouchableOpacity>
            <View style={styles.signUpContainer}>
                <Text style={styles.signUpText}>Don't have an account?</Text>
                <TouchableOpacity>
                    <Text style={styles.signUpButton}>Sign up</Text>
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
    logo: {
        width: 150,
        height: 150,
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
    forgotPassword: {
        color: '#50C2C9',
        marginBottom: 20,
    },
    signInButton: {
        backgroundColor: '#50C2C9',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
        marginBottom: 20,
    },
    signInButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    signUpContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    signUpText: {
        marginRight: 5,
    },
    signUpButton: {
        color: '#50C2C9',
        fontWeight: 'bold',
    },
});

export default SignInScreen;
