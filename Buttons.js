import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export function CustomButton(props){

    const {onPress, text} = props;

    return(
        <TouchableOpacity
            style = {{
                ...styles.button,
                backgroundColor: '#33454D'
            }}
            onPress={ onPress }
        >
            <Text
                style = {{
                    ...styles.buttonText,
                    color: '#f1f1f1',
                }}
            >
                { text }
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        alignSelf: 'center',
        borderRadius: 10,
        paddingVertical: 15,
        marginTop: 20,
        width: '80%',
    },
    buttonText: {
        textAlign: 'center',
    }
})