import React, { useState } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeStack = createNativeStackNavigator();
import { Home } from "../pages/Home";
import TabNavigation from "./TabNavigation";

export default StackNavigation = () => {
    return (
        <>

            <HomeStack.Navigator screenOptions={{ headerShown: false }} >
                <HomeStack.Screen name="Home" component={TabNavigation} />
             
            </HomeStack.Navigator>

        </>
    )
}