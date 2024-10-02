import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, FlatList, Alert } from 'react-native';
import Select from 'react-select';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TemperaturaScreen = ({ navigation }) => {
    const [inputText, setInputText] = useState('');
    const [error, setError] = useState('');
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedOption2, setSelectedOption2] = useState(null);
    const [resultado, setResultado] = useState('');
    const [temperaturas, setTemperaturas] = useState([]);

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

    const optionsTemperaturas = [
        {value: 'f', label: 'Fahrenheit'},
        {value: 'c', label: 'Celsius'},
    ];

    const esNumero = (text) => {
        return /^\d+(\.\d+)?$/.test(text);
    }

    const calcularTemperatura = async () => {
        if(!esNumero(inputText)){
            setError('Ingresa un número válido');
            return;
        }
        setError('');

        if(selectedOption.value === selectedOption2.value){
            alert('Error de conversion, Las unidades de conversión son iguales.');
            Alert.alert('Error de conversion', 'Las unidades de conversión son iguales.');
            console.log('Error de conversion', 'Las unidades de conversión son iguales.');
            return;
        }

        let resultado;
        if(selectedOption.value === 'f' && selectedOption2.value === 'c'){
            resultado = (inputText - 32) * (5/9);
            Alert.alert(`Resultado`, `La conversión es: ${resultado.toFixed(1)}° Celsius`);
            console.log(`Resultado`, `La conversión es: ${resultado.toFixed(1)}° Celsius`);
            setResultado(`${resultado.toFixed(1)}° Celsius`);

        }else if(selectedOption.value === 'c' && selectedOption2.value === 'f'){
            resultado = (inputText * (9/5)) + 32;
            Alert.alert(`Resultado`, `La conversión es: ${resultado.toFixed(1)}° Fahrenheit`);
            console.log(`Resultado`, `La conversión es: ${resultado.toFixed(1)}° Fahrenheit`);
            setResultado(`${resultado.toFixed(1)}° Fahrenheit`);
        }
        setInputText('');

        const nuevaConversion = {
            id: Date.now().toString(),
            valorIngresado: inputText,
            unidadOrigen: selectedOption.label,
            unidadDestino: selectedOption2.label,
            resultado: resultado.toFixed(2)
        };

        const updatedTemperaturas = [...temperaturas, nuevaConversion];
        setTemperaturas(updatedTemperaturas);
        console.log(updatedTemperaturas);

        try {
            await AsyncStorage.setItem('temperaturas', JSON.stringify(updatedTemperaturas));
        } catch (error) {
            console.error('Error guardando en AsyncStorage', error);
        }
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Conversión de temperatura</Text>

            <TextInput
                style={styles.input}
                placeholder="Ingresa un valor"
                placeholderTextColor="#999"
                value={inputText}
                keyboardType="numeric"
                onChangeText={(text) => setInputText(text)}
            />
            {error ? <Text style={styles.errorText}>{error}</Text> : null}

            <View style={styles.row}>
                <Text style={styles.label}>De:</Text>
                <View style={styles.selectContainer}>
                    <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={optionsTemperaturas}
                    />
                </View>

                <Text style={styles.label}>A:</Text>
                <View style={styles.selectContainer}>
                    <Select
                        defaultValue={selectedOption2}
                        onChange={setSelectedOption2}
                        options={optionsTemperaturas}
                    />
                </View>
            </View>

            <TouchableOpacity style={styles.button} onPress={calcularTemperatura}>
                <Text style={styles.buttonText}>Calcular{/* {editingId !== null ? 'Actualizar Doctor' : 'Agregar Doctor'} */}</Text>
            </TouchableOpacity>

            <Text style={styles.label}>Resultado: {resultado}</Text>
        </ScrollView>
    );
};

// Estilos
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 28,
        marginBottom: 30,
        color: '#042940',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    input: {
        height: 50,
        borderColor: '#BBDEFB',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 20,
        paddingHorizontal: 15,
        width: '100%',
        backgroundColor: '#FFFFFF',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        width: '100%',
        justifyContent: 'space-between',
    },
    label: {
        fontSize: 16,
        marginHorizontal: 10,
    },
    selectContainer: {
        width: '35%',
        marginHorizontal: 10,
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#042940',
        paddingVertical: 15,
        paddingHorizontal: 25,
        marginTop: 70,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
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
    doctorCount: {
        fontSize: 18,
        color: '#333',
        marginBottom: 10,
        textAlign: 'center',
    },
    itemContainer: {
        padding: 15,
        marginVertical: 5,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        width: '100%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    itemText: {
        fontSize: 18,
        color: '#333',
        marginBottom: 10,
    },
    crudContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    crudButton: {
        marginLeft: 10,
        backgroundColor: '#FF8A80',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    crudButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default TemperaturaScreen;