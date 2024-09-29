import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Importar las pantallas que vamos a necesitar para navegar con el Tab
import HomeScreen from "./frontend/src/screens/HomeScreen";
import ProfileScreenPatient from "./frontend/src/screens/ProfileScreenPatient";
import UserInterfacesScreen from "./frontend/src/screens/UserInterfacesScreen";
import SettingsScreen from "./frontend/src/screens/SettingsScreen";
import MedicalHistoryScreen from "./frontend/src/screens/MedicalHistoryScreen";

import IonicIcons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const AppTab = () => {
    return(
        <Tab.Navigator
            screenOptions = {({route}) => ({
                tabBarIcon: ({ focused, color }) =>{
                    let IconName ='';
                    switch(route.name){
                        case 'Home':
                            IconName = 'home';
                            break;
                        case 'Profile':
                            IconName = 'happy';
                            break;
                        case 'Usuario':
                            IconName = 'person-add';
                            break;
                        case 'History':
                            IconName = 'reorder-four';
                            break;
                        case 'Settings':
                            IconName = 'settings';
                            break;
                    }
                    return <IonicIcons name={IconName} size={25} color={'#A60F1B'}/>
                }
            })
        }
        >
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Profile" component={ProfileScreenPatient}/>
            <Tab.Screen name="Usuario" component={UserInterfacesScreen}/>
            <Tab.Screen name="History" component={MedicalHistoryScreen}/>
            <Tab.Screen name="Settings" component={SettingsScreen}/>
        </Tab.Navigator>
    );
};

export default AppTab;