import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/Home";
import DailyPicsScreen from './screens/DailyPic';
import SpaceCraftsScreen from './screens/SpaceCraft';
import StarMapScreen from './screens/StarMap';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initalRouteName = "Home"
    screenOptions = {
      {headerShown: false}
    }>
    <Stack.Screen name = "Home"
    component = {HomeScreen}/>
    <Stack.Screen name = "Daily Pics"
    component = {DailyPicsScreen}/>
    <Stack.Screen name = "Space Crafts"
    component = {SpaceCraftsScreen}/>
    <Stack.Screen name = "Star Map"
    component = {StarMapScreen}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}