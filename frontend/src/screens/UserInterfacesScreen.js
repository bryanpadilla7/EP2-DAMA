import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, FlatList, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
 
const UserInterfaceScreen = ({navigation}) => {
   const [inputText, setInputText] = useState('');
   const [patients, setPatients] = useState([]);
   const [editingId, setEditingId] = useState(null);
 
   // Cargar los pacientes guardados desde AsyncStorage al montar el componente
   useEffect(() => {
       const loadPatients = async () => {
           try {
               const storedPatients = await AsyncStorage.getItem('patients');
               if (storedPatients) {
                   setPatients(JSON.parse(storedPatients));
               }
           } catch (error) {
               console.error("Error cargando pacientes desde AsyncStorage", error);
           }
       };
       loadPatients();
   }, []);
 
   // Guardar los pacientes en AsyncStorage cuando se actualicen
   useEffect(() => {
       const savePatients = async () => {
           try {
               await AsyncStorage.setItem('patients', JSON.stringify(patients));
           } catch (error) {
               console.error("Error guardando pacientes en AsyncStorage", error);
           }
       };
       if (patients.length > 0) {
           savePatients();
       }
   }, [patients]);
 
   // Función para agregar o actualizar un paciente
   const addPatient = () => {
       if (inputText.trim()) {
           if (editingId !== null) {
               const updatedPatients = patients.map(patient =>
                   patient.id === editingId ? { id: patient.id, name: inputText } : patient
               );
               setPatients(updatedPatients);
               setEditingId(null);
           } else {
               setPatients([...patients, { id: patients.length.toString(), name: inputText }]);
           }
           setInputText('');
       }
   };
 
   // Función para editar un paciente
   const editPatient = (id) => {
       const patient = patients.find(p => p.id === id);
       setInputText(patient.name);
       setEditingId(id);
   };
 
   // Función para eliminar un paciente
   const deletePatient= (id) => {
       Alert.alert(
           "Eliminar Paciente",
           "¿Estás seguro de que deseas eliminar este paciente?",
           [
               {
                   text: "Cancelar",
                   style: "cancel"
               },
               {
                   text: "Eliminar",
                   onPress: () => {
                       const updatedPatients = patients.filter(patient => patient.id !== id);
                       setPatients(updatedPatients);
                   },
                   style: "destructive"
               }
           ]
       );
   };
 
   return (
       <ScrollView contentContainerStyle={styles.container}>
           <Text style={styles.title}>Gestión de Pacientes</Text>
 
           <TextInput
               style={styles.input}
               placeholder="Nombre del paciente"
               placeholderTextColor="#999"
               value={inputText}
               onChangeText={setInputText}
           />
 
           <TouchableOpacity style={styles.button} onPress={addPatient}>
               <Text style={styles.buttonText}>{editingId !== null ? 'Actualizar Paciente' : 'Agregar Paciente'}</Text>
           </TouchableOpacity>
 
           <Text style={styles.patientCount}>Pacientes registrados: {patients.length}</Text>
 
           <FlatList
               data={patients}
               keyExtractor={(item) => item.id}
               renderItem={({ item }) => (
                   <View style={styles.itemContainer}>
                       <Text style={styles.itemText}>Id:{item.id}</Text>
                       <Text style={styles.itemText}>{item.name}</Text>
                       <View style={styles.crudContainer}>
                           <TouchableOpacity onPress={() => editPatient(item.id)} style={styles.crudButton}>
                               <Text style={styles.crudButtonText}>Editar</Text>
                           </TouchableOpacity>
                           <TouchableOpacity onPress={() => deletePatient(item.id)} style={styles.crudButton}>
                               <Text style={styles.crudButtonText}>Eliminar</Text>
                           </TouchableOpacity>
                       </View>
                   </View>
               )}
           />
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
       backgroundColor: '#E3F2FD',
   },
   title: {
       fontSize: 28,
       marginBottom: 30,
       color: '#1E88E5',
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
   button: {
       backgroundColor: '#1E88E5',
       paddingVertical: 15,
       paddingHorizontal: 25,
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
   patientCount: {
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
 
export default UserInterfaceScreen;