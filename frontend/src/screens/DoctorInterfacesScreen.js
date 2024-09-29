import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, FlatList, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
 
const DoctorInterfacesScreen = ({navigation}) => {
   const [inputText, setInputText] = useState('');
   const [doctors, setDoctors] = useState([]);
   const [editingId, setEditingId] = useState(null);
 
   // Cargar los pacientes guardados desde AsyncStorage al montar el componente
   useEffect(() => {
       const loadDoctors = async () => {
           try {
               const storedDoctors = await AsyncStorage.getItem('doctors');
               if (storedDoctors) {
                   setDoctors(JSON.parse(storedDoctors));
               }
           } catch (error) {
               console.error("Error cargando doctores desde AsyncStorage", error);
           }
       };
       loadDoctors();
   }, []);
 
   // Guardar los pacientes en AsyncStorage cuando se actualicen
   useEffect(() => {
       const saveDoctors = async () => {
           try {
               await AsyncStorage.setItem('doctors', JSON.stringify(doctors));
           } catch (error) {
               console.error("Error guardando pacientes en AsyncStorage", error);
           }
       };
       if (doctors.length > 0) {
           saveDoctors();
       }
   }, [doctors]);
 
   // Función para agregar o actualizar un paciente
   const addDoctor = () => {
       if (inputText.trim()) {
           if (editingId !== null) {
               const updatedDoctors = doctors.map(doctor =>
                   doctor.id === editingId ? { id: doctor.id, name: inputText } : doctor
               );
               setDoctors(updatedDoctors);
               setEditingId(null);
           } else {
               setDoctors([...doctors, { id: doctors.length.toString(), name: inputText }]);
           }
           setInputText('');
       }
   };
 
   // Función para editar un paciente
   const editDoctor = (id) => {
       const doctor = doctors.find(p => p.id === id);
       setInputText(doctor.name);
       setEditingId(id);
   };
 
   // Función para eliminar un paciente
   const deleteDoctor= (id) => {
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
                       const updatedDoctors = doctors.filter(doctor => doctor.id !== id);
                       setDoctors(updatedDoctors);
                   },
                   style: "destructive"
               }
           ]
       );
   };
 
   return (
       <ScrollView contentContainerStyle={styles.container}>
           <Text style={styles.title}>Gestión de Doctores</Text>
 
           <TextInput
               style={styles.input}
               placeholder="Nombre del doctor"
               placeholderTextColor="#999"
               value={inputText}
               onChangeText={setInputText}
           />
 
           <TouchableOpacity style={styles.button} onPress={addDoctor}>
               <Text style={styles.buttonText}>{editingId !== null ? 'Actualizar Doctor' : 'Agregar Doctor'}</Text>
           </TouchableOpacity>
 
           <Text style={styles.doctorCount}>Doctores registrados: {doctors.length}</Text>
 
           <FlatList
               data={doctors}
               keyExtractor={(item) => item.id}
               renderItem={({ item }) => (
                   <View style={styles.itemContainer}>
                       <Text style={styles.itemText}>{item.name}</Text>
                       <View style={styles.crudContainer}>
                           <TouchableOpacity onPress={() => editDoctor(item.id)} style={styles.crudButton}>
                               <Text style={styles.crudButtonText}>Editar</Text>
                           </TouchableOpacity>
                           <TouchableOpacity onPress={() => deleteDoctor(item.id)} style={styles.crudButton}>
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
       backgroundColor: '#F3C4CF',
   },
   title: {
       fontSize: 28,
       marginBottom: 30,
       color: '#A32029',
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
       backgroundColor: '#BB4649',
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
 
export default DoctorInterfacesScreen;