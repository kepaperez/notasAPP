import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../pages/Home';
import CreateNote from '../pages/CreateNote';
import Settings from '../pages/Settings';
import TopTabNavigation from './TopTabNavigation';
const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#FF9A03',
            tabBarStyle: {
                backgroundColor: '#161615',}
        }}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Create" component={CreateNote} />
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    );
}
