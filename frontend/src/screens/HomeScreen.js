import React from 'react';
import {View, Text, StyleSheet, Pressable, ScrollView} from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={Styles.container}>
            <Text style={Styles.title}>Selecciona una categoría de conversión</Text>
            <Pressable style={Styles.button} onPress={() => navigation.navigate("Longitud")}>
                <Text style={Styles.buttonText}>Coversión de longitud</Text>
            </Pressable>
            <View style={Styles.spacer}></View>
            <Pressable style={Styles.button} onPress={() => navigation.navigate("Peso")}>
                <Text style={Styles.buttonText}>Conversión de peso</Text>
            </Pressable>
            <View style={Styles.spacer}></View>
            <Pressable style={Styles.button} onPress={() => navigation.navigate("Temperatura")}>
                <Text style={Styles.buttonText}>Conversión de temperatura</Text>
            </Pressable>
        </ScrollView>
    );
}

const Styles = StyleSheet.create({
    container:{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
    },
    title:{
        fontSize: 40,
        marginBottom: 20,
        color: '#333',
    },
    spacer:{
        height:20,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        paddingHorizontal: 32,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: '#042940',
        width: '70%',
    },
    buttonText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});

export default HomeScreen;