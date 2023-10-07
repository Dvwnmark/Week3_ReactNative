import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { View, Text } from "react-native";
import HomeScreen from "../screens/HomeScreen";



const Tab = createBottomTabNavigator();

    const screenOptionStyle = {
        tabBarShowLabel: false,
        headerShown:false,
        tabBarStyle:{
            backgroundColor:"#ffffff",
            position:"absolute",
            bottom:0,
            height:70,
            left:0,
            right: 0,
            elevation:0,
            
            
        }


    }
    export default function Tabnavigation(){
        return (
            <NavigationContainer>
                <Tab.Navigator screenOptionStyle={screenOptionStyle}>
                    <Tab.Screen
                        name="HomeScreen"
                        component={HomeScreen}
                        options={{
                            tabBarIcon: ({ focused }) => {
                                const textColor = focused ? "#204c8b" : "#bababa";
                                return (
                                <View style={{ alignItems: "center", justifyContent: "center" , display:"flex" }}>             
                                    <Text style={{ fontSize: 12, color: textColor, fontWeight: "bold" }}>HomeScreen</Text>
                                </View>
                                )
                                }
                        }}

                    />
                    
                        
                    

                </Tab.Navigator>

            </NavigationContainer>
        )

    }