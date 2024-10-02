import React from "react";
import {View, Text, Button, StyleSheet} from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, TransitionSpecs, HeaderStyleInterpolators } from "@react-navigation/stack";

import HomeScreen from './frontend/src/screens/HomeScreen.js';
import LogitudScreen from './frontend/src/screens/LongitudScreen.js';
import PesoScreen from './frontend/src/screens/PesoScreen.js';
import TemperaturaScreen from './frontend/src/screens/TemperaturaScreen.js';
import HistoryScreen from './frontend/src/screens/HistoryScreen.js';
import ButtonTabScreen from './AppTab.js';


const Stack = createStackNavigator(); 

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ButtonTab">
        <Stack.Screen name="ButtonTab" component={ButtonTabScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Inicio" component={HomeScreen}/>
        <Stack.Screen name="Longitud" component={LogitudScreen}/>
        <Stack.Screen name="Peso" component={PesoScreen}/>
        <Stack.Screen name="Temperatura" component={TemperaturaScreen}/>
        <Stack.Screen name="History" component={HistoryScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;