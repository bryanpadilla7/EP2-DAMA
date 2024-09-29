import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, Modal } from 'react-native';

export default function AppointmentScreen({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [newAppointment, setNewAppointment] = useState({
        date: '',
        time: '',
        patient: '',
        reason: ''
    });
    const [appointments, setAppointments] = useState([
        { date: '2024-08-01', time: '10:00 AM', patient: 'Bryan Padilla', reason: 'Revisión general' },
        { date: '2024-08-03', time: '11:00 AM', patient: 'Maria Perez', reason: 'Consulta de seguimiento' }
    ]);

    const handleAddAppointment = () => {
        setAppointments([...appointments, newAppointment]);
        setModalVisible(false);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Citas Programadas</Text>
            <View style={styles.appointmentsContainer}>
                {appointments.map((appointment, index) => (
                    <View key={index} style={styles.appointmentCard}>
                        <Text>Fecha: {appointment.date}</Text>
                        <Text>Hora: {appointment.time}</Text>
                        <Text>Paciente: {appointment.patient}</Text>
                        <Text>Motivo: {appointment.reason}</Text>
                    </View>
                ))}
            </View>
            <TouchableOpacity 
                style={styles.newAppointmentButton}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.newAppointmentText}>Nueva Cita</Text>
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalView}>
                    <Text style={styles.modalTitle}>Agregar Nueva Cita</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Fecha (YYYY-MM-DD)"
                        onChangeText={(text) => setNewAppointment({ ...newAppointment, date: text })}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Hora (HH:MM AM/PM)"
                        onChangeText={(text) => setNewAppointment({ ...newAppointment, time: text })}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Paciente"
                        onChangeText={(text) => setNewAppointment({ ...newAppointment, patient: text })}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Motivo"
                        onChangeText={(text) => setNewAppointment({ ...newAppointment, reason: text })}
                    />
                    <View style={styles.modalButtons}>
                        <Button title="Agregar" onPress={handleAddAppointment} />
                        <Button title="Cancelar" color="red" onPress={() => setModalVisible(false)} />
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center'
    },
    appointmentsContainer: {
        flex: 1,
        marginBottom: 20
    },
    appointmentCard: {
        backgroundColor: '#f0f0f0',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10
    },
    newAppointmentButton: {
        backgroundColor: '#6A0DAD',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    newAppointmentText: {
        color: '#fff',
        fontWeight: 'bold'
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15
    },
    input: {
        width: '100%',
        borderBottomWidth: 1,
        marginBottom: 15,
        padding: 10
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    }
});
