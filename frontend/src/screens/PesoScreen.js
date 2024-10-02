import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, FlatList, Alert } from 'react-native';
import Select from 'react-select';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PesoScreen = ({ navigation }) => {
    const [inputText, setInputText] = useState('');
    const [error, setError] = useState('');
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedOption2, setSelectedOption2] = useState(null);
    const [resultado, setResultado] = useState('');
    const [pesos, setPesos] = useState([]);

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

    const optionsPeso = [
        {value: 'kg', label: 'Kilogramos'},
        {value: 'lb', label: 'Libras'},
    ];

    const esNumero = (text) => {
        return /^\d+(\.\d+)?$/.test(text);
    }

    const calcularPeso = async () => {
        if(!esNumero(inputText)){
            setError('Ingresa un número válido');
            return;
        }
        setError('');

        if(selectedOption.value === selectedOption2.value){
            alert('Error de conversion, las unidades de conversión son iguales.');
            Alert.alert('Error de conversion', 'Las unidades de conversión son iguales.');
            console.log('Error de conversion', 'Las unidades de conversión son iguales.');
            return;
        }

        let resultado;
        if(selectedOption.value === 'kg' && selectedOption2.value === 'lb'){
            resultado = inputText * 2.20462;
            Alert.alert(`Resultado`, `La conversión es: ${resultado} ${resultado.toFixed(2)} Libras`);
            console.log(`Resultado`, `La conversión es: ${resultado.toFixed(2)} Libras`);
            setResultado(`${resultado.toFixed(2)} Libras`);

        }else if(selectedOption.value === 'lb' && selectedOption2.value === 'kg'){
            resultado = inputText * 0.453592;
            Alert.alert(`Resultado`, `La conversión es: ${resultado.toFixed(2)} Kilogramos`);
            console.log(`Resultado`, `La conversión es: ${resultado.toFixed(2)} Kilogramos`);
            setResultado(`${resultado.toFixed(2)} Kilogramos`);
        }
        setInputText('');

        const nuevaConversion = {
            id: Date.now().toString(),
            valorIngresado: inputText,
            unidadOrigen: selectedOption.label,
            unidadDestino: selectedOption2.label,
            resultado: resultado.toFixed(2)
        };

        const updatedPesos = [...pesos, nuevaConversion];
        setPesos(updatedPesos);
        console.log(updatedPesos);

        try {
            await AsyncStorage.setItem('pesos', JSON.stringify(updatedPesos));
        } catch (error) {
            console.error('Error guardando en AsyncStorage', error);
        }
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Conversión de peso</Text>

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
                        options={optionsPeso}
                    />
                </View>

                <Text style={styles.label}>A:</Text>
                <View style={styles.selectContainer}>
                    <Select
                        defaultValue={selectedOption2}
                        onChange={setSelectedOption2}
                        options={optionsPeso}
                    />
                </View>
            </View>

            <TouchableOpacity style={styles.button} onPress={calcularPeso}>
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

export default PesoScreen;