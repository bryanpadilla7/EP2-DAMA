import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Importar las pantallas que vamos a necesitar para navegar con el Tab
import HomeScreen from "./frontend/src/screens/HomeScreen";
import HistoryScreen from "./frontend/src/screens/HistoryScreen";

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
                        case 'History':
                            IconName = 'list';
                            break;
                    }
                    return <IonicIcons name={IconName} size={25} color={'#042940'}/>
                }
            })
        }
        >
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="History" component={HistoryScreen}/>
        </Tab.Navigator>
    );
};

export default AppTab;