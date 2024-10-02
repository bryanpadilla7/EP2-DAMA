import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HistoryScreen = ({ navigation }) => {
    const [longitudes, setLongitudes] = useState([]);
    const [pesos, setPesos] = useState([]);
    const [temperaturas, setTemperaturas] = useState([]);

    const clearAllHistory = async () => {
        try {

            await AsyncStorage.removeItem('longitudes');
            await AsyncStorage.removeItem('pesos');
            await AsyncStorage.removeItem('temperaturas');
    
            setLongitudes([]);
            setPesos([]);
            setTemperaturas([]);
        } catch (error) {
            console.error("Error eliminando el historial", error);
        }
    };
    
    useEffect(() => {
        const loadLongitudes = async () => {
            try {
                const storedLongitudes = await AsyncStorage.getItem('longitudes');
                if (storedLongitudes) {
                    setLongitudes(JSON.parse(storedLongitudes));
                }
            } catch (error) {
                console.error("Error cargando longitudes desde AsyncStorage", error);
            }
        };
        loadLongitudes();
    }, []);

    useEffect(() => {
        const loadPesos = async () => {
            try {
                const storedPesos = await AsyncStorage.getItem('pesos');
                if (storedPesos) {
                    setPesos(JSON.parse(storedPesos));
                }
            } catch (error) {
                console.error("Error cargando pesos desde AsyncStorage", error);
            }
        };
        loadPesos();
    }, []);

    useEffect(() => {
        const loadTemperaturas = async () => {
            try {
                const storedTemperaturas = await AsyncStorage.getItem('temperaturas');
                if (storedTemperaturas) {
                    setTemperaturas(JSON.parse(storedTemperaturas));
                }
            } catch (error) {
                console.error("Error cargando temperaturas desde AsyncStorage", error);
            }
        };
        loadTemperaturas();
    }, []);

    const renderItem = ({ item }) => (
        <View style={Styles.item}>
            <Text style={Styles.textResult}>LONGITUD</Text>
            <Text style={Styles.textResult}>{item.valorIngresado} {item.unidadOrigen} convertido a {item.resultado} {item.unidadDestino}</Text>
        </View>
    );

    const renderItem1 = ({ item }) => (
        <View style={Styles.item}>
            <Text style={Styles.textResult}>PESO</Text>
            <Text style={Styles.textResult}>{item.valorIngresado} {item.unidadOrigen} convertido a {item.resultado} {item.unidadDestino}</Text>
        </View>
    );

    const renderItem2 = ({ item }) => (
        <View style={Styles.item}>
            <Text style={Styles.textResult}>TEMPERATURA</Text>
            <Text style={Styles.textResult}>{item.valorIngresado} {item.unidadOrigen} convertido a {item.resultado} {item.unidadDestino}</Text>
        </View>
    );

    return (
        <View style={Styles.container}>
            <Text style={Styles.title}>Historial de conversiones</Text>
            <FlatList
                data={longitudes}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                ListEmptyComponent={<Text>No hay conversiones almacenadas.</Text>}
            />
            <FlatList
                data={pesos}
                keyExtractor={(item) => item.id}
                renderItem={renderItem1}
                ListEmptyComponent={<Text>No hay conversiones almacenadas.</Text>}
            />
            <FlatList
                data={temperaturas}
                keyExtractor={(item) => item.id}
                renderItem={renderItem2}
                ListEmptyComponent={<Text>No hay conversiones almacenadas.</Text>}
            />

            <TouchableOpacity style={Styles.button} onPress={clearAllHistory}>
                <Text style={Styles.buttonText}>Borrar historial{/* {editingId !== null ? 'Actualizar Doctor' : 'Agregar Doctor'} */}</Text>
            </TouchableOpacity>
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
        backgroundColor: '#042940',
        paddingVertical: 15,
        paddingHorizontal: 25,
        marginTop: 70,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '70%',
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    item: {
        paddingHorizontal: 80,
        paddingVertical: 20,
        marginVertical: 5,
        backgroundColor: '#f9f9f9',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    textResult: {
        fontSize: 13,
        fontWeight: 'bold',
    }
});

export default HistoryScreen;