import React, { useState } from "react";
import {View, Text, StyleSheet, Image, Pressable, ScrollView} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'

const SettingsScreen = ({ navigation }) => {
    return(
        <ScrollView contentContainerStyle={Styles.container}>
            <Text style={Styles.title}>Configuración</Text>

            <Pressable style={Styles.button}>
                <View style={Styles.row}>
                    <Ionicons name="person" size={25} color={'white'}></Ionicons>
                    <Text style={Styles.buttonText}>Editar Perfil</Text>
                </View>
            </Pressable>

            <Pressable style={Styles.button}>
                <View style={Styles.row}>
                    <Ionicons name="notifications" size={25} color={'white'}></Ionicons>
                    <Text style={Styles.buttonText}>Notificaciones</Text>
                </View>
            </Pressable>

            <Pressable style={Styles.button}>
                <View style={Styles.row}>
                    <Ionicons name="brush" size={25} color={'white'}></Ionicons>
                    <Text style={Styles.buttonText}>Preferencias de Tema</Text>
                </View>
            </Pressable>

            <Pressable style={Styles.button}>
                <View style={Styles.row}>
                    <Ionicons name="language" size={25} color={'white'}></Ionicons>
                    <Text style={Styles.buttonText}>Idioma</Text>
                </View>
            </Pressable>

            <Pressable style={Styles.button}>
                <View style={Styles.row}>
                    <Ionicons name="lock-closed" size={25} color={'white'}></Ionicons>
                    <Text style={Styles.buttonText}>Cambiar Contraseña</Text>
                </View>
            </Pressable>

            <Pressable style={Styles.button}>
                <View style={Styles.row}>
                    <Ionicons name="information-circle" size={25} color={'white'}></Ionicons>
                    <Text style={Styles.buttonText}>Acerca de la Aplicación</Text>
                </View>
            </Pressable>

            <Pressable style={Styles.button} onPress={() => navigation.navigate("Login")}>
                <View style={Styles.row}>
                    <Ionicons name="exit" size={25} color={'white'}></Ionicons>
                    <Text style={Styles.buttonText}>Cerrar Sesión</Text>
                </View>
            </Pressable>

            <Pressable style={Styles.buttonLogOut}>
                <View style={Styles.row}>
                    <Ionicons name="trash" size={25} color={'white'}></Ionicons>
                    <Text style={Styles.buttonText}>Eliminar Cuenta</Text>
                </View>
            </Pressable>
            </ScrollView>
    );
};

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#E4F2FD',
    },
    container2:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        marginBottom: 30,
        textAlign: 'center',
        color: '#2889D7',
        fontWeight: 'bold',
    },
    labelTitle:{
        fontSize: 28,
        marginBottom: 10,
        paddingHorizontal: 10,
        textAlign: 'center',
    },
    label:{
        fontSize: 20,
        marginBottom: 10,
        paddingHorizontal: 10,
        textAlign: 'center',
        color: '#023535',
        backgroundColor: '#9AEBA3',
        fontStyle: "italic",
    },
    image:{
        width: 200,
        height: 200,
        backgroundColor: '#B9E6E7',
        borderRadius: '50%',
    },
    button: {
        justifyContent: 'center',
        marginBottom: 20,
        paddingVertical: 15,
        paddingHorizontal: 32,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: '#1E88E5',
        shadowColor: "#000000",
        shadowOpacity: 0.2,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1
        }
    },
    buttonLogOut: {
        justifyContent: 'center',
        marginBottom: 20,
        paddingVertical: 15,
        paddingHorizontal: 32,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: '#E57373',
        shadowColor: "#000000",
        shadowOpacity: 0.2,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1
        }
    },
    buttonText: {
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0.25,
        marginLeft: 10,
        fontWeight: 'bold',
        color: 'white'

    },
    row:{
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default SettingsScreen;