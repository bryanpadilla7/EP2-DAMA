import React, { useState } from 'react';
import {View, Text, TextInput, Alert, StyleSheet, Pressable, Image} from 'react-native';
import axios from 'axios';

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        //console.log("Username: ",Username, "Password: ", Password);
        /* if(Username === 'a' && Password === '1'){
            navigation.navigate("Inicio");
        } */
        try {
            const response = await axios.post('http://192.168.1.11:5000/api/login', {
                username, 
                password,
            });
            
            console.log(response.data);

            if (!response.data.message === 'Login Fallido') {
                Alert.alert('Error', 'Credenciales invalidas');
                //navigation.navigate('Inicio');
            }else{
                Alert.alert('Exito', `Bienvenido ${username}`);
                navigation.navigate('Inicio');
            }
        } catch (error) {
            console.log(error);
            Alert.alert('Error', 'Error en la conexion o servidor');
        }
    };

    return (
        <View style={Styles.container}>
            <View style={Styles.container2}>
            <Image
            style={Styles.imageChild}
            source={require("../../../assets/logo.jpg")}></Image>
            </View>
            <Text style={Styles.title}>Clínica Pediátrica</Text>
            <TextInput
                style={Styles.input}
                placeholder="Nombre de usuario"
                value={username}
                onChangeText={setUsername}
            ></TextInput>
            <TextInput
                style={Styles.input}
                placeholder="Contraseña"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            ></TextInput>
            <Pressable style={Styles.button} onPress={() => handleLogin(this)}>
                <Text style={Styles.buttonText}>Ingresar</Text>
            </Pressable>
        </View>
    );
};

//Estilo de nuestra pantalla

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
    input:{
        height: 50,
        color: '#B0B0B0',
        borderColor: '#B0B0B0',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        paddingHorizontal: 32,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: '#2889D7',
    },
    buttonText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    imageChild:{
        borderRadius:'50%',
        height: 200,
        width: 200,
        marginBottom: 30,
    }
});

export default LoginScreen;
