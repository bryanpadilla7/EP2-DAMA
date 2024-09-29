import React, { useState } from "react";
import {View, Text, TextInput, Button, StyleSheet, Image, Pressable} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'

const ProfileScreenAdmin = () => {
    const [Nombre, setNombre] = useState('Tiburcio Angel');
    const [Apellido, setApellido] = useState('Bonilla Tejada');
    const [Rol, setRol] = useState('Administrador');
    const [Mail, setMail] = useState('tiburcio.bonilla@clinica.com');

    return(
        <View style={Styles.container}>
            <View style={Styles.container2}>
            <Image
                style={Styles.image}
                source={require("../../../assets/admin.png")}
            ></Image>
            </View>
            <Text style={Styles.title}>Perfil del Administrador</Text>

            <Pressable style={Styles.button}>
                <View style={Styles.row}>
                    <Ionicons name="person" size={25} color={'#2889D7'}></Ionicons>
                    <Text style={Styles.buttonText}>Nombre: {Nombre+" "+Apellido}</Text>
                </View>
            </Pressable>

            <Pressable style={Styles.button}>
                <View style={Styles.row}>
                    <Ionicons name="build" size={25} color={'#2889D7'}></Ionicons>
                    <Text style={Styles.buttonText}>Rol: {Rol}</Text>
                </View>
            </Pressable>

            <Pressable style={Styles.button}>
                <View style={Styles.row}>
                    <Ionicons name="mail" size={25} color={'#2889D7'}></Ionicons>
                    <Text style={Styles.buttonText}>Correo: {Mail}</Text>
                </View>
            </Pressable>
            </View>
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
        backgroundColor: 'white',
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
    },
    row:{
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default ProfileScreenAdmin;