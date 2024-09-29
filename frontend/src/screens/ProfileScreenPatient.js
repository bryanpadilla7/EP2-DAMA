import React, { useState } from "react";
import {View, Text, StyleSheet, Image, Pressable, ScrollView} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'


const ProfileScreenPatient = ({ navigation }) => {
    const [Nombre, setNombre] = useState('Aurelio');
    const [Apellido, setApellido] = useState('Rodas');
    const [Edad, setEdad] = useState('2 años');
    const [Condicion, setCondicion] = useState('Varisela');
    const [NombreResponsable, setNombreResponsable] = useState('Noel Sánchez');
    const [Telefono, setTelefono] = useState('+503 4578-6788');
    const [Relacion, setRelacion] = useState('Padre');

    return(
        <ScrollView contentContainerStyle={Styles.container}>
            <View style={Styles.container2}>
            <Image
                style={Styles.image}
                source={require("../../../assets/child.png")}
            ></Image>
            </View>
            <Text style={Styles.title}>Perfil del Paciente</Text>

            <Pressable style={Styles.button}>
                <View style={Styles.row}>
                    <Ionicons name="accessibility" size={25} color={'#FF8A7D'}></Ionicons>
                    <Text style={Styles.buttonText}>Nombre: {Nombre+" "+Apellido}</Text>
                </View>
            </Pressable>

            <Pressable style={Styles.button}>
                <View style={Styles.row}>
                    <Ionicons name="calendar-number" size={25} color={'#FF8A7D'}></Ionicons>
                    <Text style={Styles.buttonText}>Edad: {Edad}</Text>
                </View>
            </Pressable>

            <Pressable style={Styles.button}>
                <View style={Styles.row}>
                    <Ionicons name="pulse" size={25} color={'#FF8A7D'}></Ionicons>
                    <Text style={Styles.buttonText}>Condición: {Condicion}</Text>
                </View>
            </Pressable>

            <Text style={Styles.title}>Informacion del responsable</Text>

            <Pressable style={Styles.button}>
                <View style={Styles.row}>
                    <Ionicons name="person" size={25} color={'#FF8A7D'}></Ionicons>
                    <Text style={Styles.buttonText}>Nombre: {NombreResponsable}</Text>
                </View>
            </Pressable>

            <Pressable style={Styles.button}>
                <View style={Styles.row}>
                    <Ionicons name="call" size={25} color={'#FF8A7D'}></Ionicons>
                    <Text style={Styles.buttonText}>Teléfono: {Telefono}</Text>
                </View>
            </Pressable>

            <Pressable style={Styles.button}>
                <View style={Styles.row}>
                    <Ionicons name="people" size={25} color={'#FF8A7D'}></Ionicons>
                    <Text style={Styles.buttonText}>Relacion: {Relacion}</Text>
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
        backgroundColor: '#FFF3E0',
    },
    container2:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        marginBottom: 30,
        textAlign: 'center',
        color: '#FF8A7D',
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
        width: 150,
        height: 150,
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

export default ProfileScreenPatient;