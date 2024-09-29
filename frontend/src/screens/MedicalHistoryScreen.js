import React from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';

const MedicalHistoryScreen = ({ navigaion }) => {
    
    const patients = [
        { id: '1', name: 'Juan Pérez', Diagnostico: 'Diagnostico: Diabetes', Tratamiento: 'Tratamiento: Insulina', Notas: 'Notas: Revision en una semana' },
        { id: '2', name: 'María Gómez', Diagnostico: 'Diagnostico: Hipertensión     ', Tratamiento: 'Tratamiento: Losartán     ', Notas: 'Notas: Revision en una semana' },
        { id: '3', name: 'Carlos Rodríguez', Diagnostico: 'Asma           ', Tratamiento: 'Salbutamol   ', Notas: 'Revision en una semana' },
        
    ];

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Historial Médico de Pacientes</Text>
            <FlatList
                data={patients}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Text style={styles.itemName}>{item.name}</Text>
                        <Text style={styles.itemDiagnostico}>{item.Diagnostico}</Text>
                        <Text style={styles.itemTratamiento}>{item.Tratamiento}</Text>
                        <Text style={styles.itemNotas}>{item.Notas}</Text>
                        
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
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
    itemContainer: {
        padding: 15,
        marginVertical: 10,
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
        width: '100%',
    },
    itemName: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    itemDiagnostico: {
        fontSize: 16,
        marginTop: 5,
    },
    itemTratamiento: {
        fontSize: 16,
        marginTop: 5,
    },
    itemNotas: {
        fontSize: 16,
        marginTop: 5,
    },
});

export default MedicalHistoryScreen;
