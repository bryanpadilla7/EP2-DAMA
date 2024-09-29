import React from "react";
import {View, Text, Button, StyleSheet} from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, TransitionSpecs, HeaderStyleInterpolators } from "@react-navigation/stack";

import LoginScreen from './frontend/src/screens/LoginScreen.js';
import HomeScreen from './frontend/src/screens/HomeScreen.js';
import PatientProfile from './frontend/src/screens/ProfileScreenPatient.js';
import SettingsScreen from './frontend/src/screens/SettingsScreen.js';
import AppointmentScreen from './frontend/src/screens/AppointmentScreen.js';
import HistoryScreen from './frontend/src/screens/MedicalHistoryScreen.js';
import UserInterfaceScreen from './frontend/src/screens/UserInterfacesScreen.js';
import DoctorInterfacesScreen from "./frontend/src/screens/DoctorInterfacesScreen.js";

const Stack = createStackNavigator(); 

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Inicio" component={HomeScreen}/>
        <Stack.Screen name="Paciente" component={PatientProfile}/>
        <Stack.Screen name="Configuracion" component={SettingsScreen}/>
        <Stack.Screen name="Citas" component={AppointmentScreen}/>
        <Stack.Screen name="Historial" component={HistoryScreen}/>
        <Stack.Screen name="Interface" component={UserInterfaceScreen}/>
        <Stack.Screen name="Doctors" component={DoctorInterfacesScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;