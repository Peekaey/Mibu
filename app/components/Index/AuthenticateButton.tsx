import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const AuthenticateButton = ({ onPress, title, buttonStyle, textStyle }) => {
    return (
        <TouchableOpacity
            style={[styles.button, buttonStyle]}
            onPress={onPress}
        >
            <Text style={[styles.buttonText, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#3498db', // Change the background color as needed
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default AuthenticateButton;