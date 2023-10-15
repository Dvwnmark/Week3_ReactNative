import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput, StatusBar } from 'react-native';
import {AntDesign} from '@expo/vector-icons';

export default function Screen6(){
    
        return(
            <View style={styles.container}> 
                <Text style={styles.registerStyle}>REGISTER</Text>
                <View style={styles.typeNameFrame}>
                    <TextInput style={styles.typeTextName} placeholder='Name'></TextInput>

                </View>
                <View style={styles.typeNameFrame}>
                    <TextInput style={styles.typeTextName} placeholder='Phone'></TextInput>

                </View>
                <View style={styles.typeNameFrame}>
                    <TextInput style={styles.typeTextName} placeholder='Email'></TextInput>

                </View>
                <View style={styles.typeNameFrame}>
                    <TextInput style={styles.typeTextName} placeholder='Password'></TextInput>
                    <AntDesign name="eye" size={24} color="black" />

                </View>
                <View style={styles.typeNameFrame}>
                    <TextInput style={styles.typeTextName} placeholder='Birthday'></TextInput>

                </View>

                <View style={styles.clickGender}>

                    <View style={{flexDirection:'row'}}>
                        <View style={styles.gender}/>
                        <Text>Male</Text>  
                    </View>

                    <View style={styles.distanceGender}>
                        <View style={styles.gender}/>
                        <Text>Female</Text>
                    </View>
                </View>     

                <View style={styles.registerBtn}>
                        <TouchableOpacity>
                        <Text style={styles.registerBtnText}>REGISTER</Text>
                        </TouchableOpacity>
                </View>
                    <Text>When you agree to terms and conditions</Text>

                    <StatusBar style='auto'/>
                

            </View>   
            
        )
    }   
    
    const styles= StyleSheet.create({
        container:{
            flex:1,
            backgroundColor:'#d8efde',
            alignItems:'center',
            justifyContent:'center',
            marginBottom:50,
        },
        registerStyle:{
            fontSize:30,
            fontWeight:'bold',
            color:'black',
        },
        typeNameFrame:{
            flexDirection:'row',
            justifyContent:'flex-start',
            alignItems:'center',
            padding:10,
            //borderRadius:5,
            marginVertical:10,
            backgroundColor:'#c4c4c4',
            width:'90%',
            height:50,
        },
        typeTextName:{
            width:'90%',
            fontWeight:'bold',
            color:'black',
            marginLeft:10,
        },
        gender:{
            borderColor:'#111',
            borderWidth:1,
            width:20,
            height:20,
            borderRadius:50,
            marginRight:10,
            
        },
        clickGender:{
            flexDirection:'row',
            justifyContent:'flex-start',
            alignItems:'center',
            padding:10,
            //borderRadius:5,
            marginVertical:10,
           // backgroundColor:'#c4c4c4',
            width:'90%',
            height:50,
        },
        distanceGender:{
            flexDirection:'row',
            marginLeft:50,
            
        },
        registerBtn:{
            flexDirection:  'row',
            width:'90%',
            justifyContent:'center',
            backgroundColor: 'red',
            padding:10,
            borderRadius:5,
            width:'90%',
            alignItems:'center',
            
        },
        registerBtnText:{
            flexDirection:  'row',
            fontSize:20,
            alignItems:'center',
            color:'white',
            fontWeight:'bold',
        }
    })
