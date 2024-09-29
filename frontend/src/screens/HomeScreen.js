import React from 'react';
import {View, Text, Button, StyleSheet, Pressable} from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={Styles.container}>
            <Text style={Styles.title}>Bienvenido a la Clinica Pediatrica</Text>
            <Pressable style={Styles.button} onPress={() => navigation.navigate("Paciente")}>
                <Text style={Styles.buttonText}>Perfil</Text>
            </Pressable>
            <View style={Styles.spacer}></View>
            <Pressable style={Styles.button} onPress={() => navigation.navigate("Configuracion")}>
                <Text style={Styles.buttonText}>Configuracíon</Text>
            </Pressable>
            <View style={Styles.spacer}></View>
            <Pressable style={Styles.button} onPress={() => navigation.navigate("Citas")}>
                <Text style={Styles.buttonText}>Citas</Text>
            </Pressable>
            <View style={Styles.spacer}></View>
            <Pressable style={Styles.button} onPress={() => navigation.navigate("Historial")}>
                <Text style={Styles.buttonText}>Historial Médico</Text>
            </Pressable>
            <View style={Styles.spacer}></View>
            <Pressable style={Styles.button} onPress={() => navigation.navigate("Interface")}>
                <Text style={Styles.buttonText}>Gestion Usuarios</Text>
            </Pressable>
            <View style={Styles.spacer}></View>
            <Pressable style={Styles.button} onPress={() => navigation.navigate("Doctors")}>
                <Text style={Styles.buttonText}>Gestion Doctores</Text>
            </Pressable>
            <View style={Styles.spacer}></View>
            <Pressable style={Styles.button} onPress={() => navigation.navigate("Login")}>
                <Text style={Styles.buttonText}>Cerrar Sesión</Text>
            </Pressable>
        </View>
    );
}

const Styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
        backgroundColor: '#A60F1B',
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