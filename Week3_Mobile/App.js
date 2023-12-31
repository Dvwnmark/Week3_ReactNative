import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';
import Screen4 from './screens/Screen4';
import Screen5 from './screens/Screen5';
import Screen6 from './screens/Screen6';
import Screen7 from './screens/Screen7'



import { StyleSheet, Text, View } from 'react-native';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="HomePage" component={HomeScreen}/>
            <Stack.Screen name="Screen1" component={Screen1}/>
            <Stack.Screen name="Screen2" component={Screen2}/>
            <Stack.Screen name="Screen3" component={Screen3}/>
            <Stack.Screen name="Screen4" component={Screen4}/>
            <Stack.Screen name="Screen5" component={Screen5}/>
            <Stack.Screen name="Screen6" component={Screen6}/>
            <Stack.Screen name="Screen7" component={Screen7}/>
            
          </Stack.Navigator>


      </NavigationContainer>
  )
}

