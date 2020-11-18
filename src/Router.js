import React from "react";
import { SafeAreaView, View, Text } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {Restaurant, RestaurantDetails, CityList } from "./pages"

const Stack = createStackNavigator();

const Router = () => {
    return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Cities" component={CityList} />
            <Stack.Screen name="Restaurant" component={Restaurant} />
            <Stack.Screen name="Details" component={RestaurantDetails} />
        </Stack.Navigator>
    </NavigationContainer>
    )
}

export default Router;