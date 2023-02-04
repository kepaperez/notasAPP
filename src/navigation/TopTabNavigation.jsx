import * as React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Notas from '../pages/Notas';
import Grupos from '../pages/Grupos';
const Tab = createMaterialTopTabNavigator();

export default function TopTabNavigation() {
    return (
        <Tab.Navigator screenOptions={{
            tabBarLabelStyle: {color:'white'},
            tabBarStyle: { backgroundColor: '#161615'},
            tabBarIndicatorStyle:{backgroundColor:'#FF9A03'}
         
        }}>
            <Tab.Screen name="Notas" component={Notas} />
            <Tab.Screen name="Grupos" component={Grupos} />
        </Tab.Navigator>
    );
}
