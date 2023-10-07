import { LinearGradient } from "expo-linear-gradient"
import  React from 'react';
import { View, Text, StyleSheet, Image, Button, Touchable, TouchableOpacity, StatusBar, TextInput } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function Screen3() { 
    return(
        <LinearGradient colors={["rgba(0,156,199,1)","rgba(1,149,223,1)"]}
            style={styles.gradientBackground} 
        >
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../assets/lock.png')}
            />
            <Text style={styles.text1}>FORGET{"\n"}PASSWORD</Text>
            <Text style={styles.text3}>Provide your account's email for which you want to reset your password </Text>

                <View style={styles.searchItem  }>
                    <MaterialCommunityIcons name="email-outline" size={24} color="black"/>
                <TextInput style={styles.inputType} placeholder="Email" />
                </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>NEXT</Text>

            </TouchableOpacity>
            <StatusBar style="auto"></StatusBar>
            </View>            

        </LinearGradient>
    )
}

const styles= StyleSheet.create({
    gradientBackground:{
    
        flex:1,
        
    },  
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#33CCFF',
        justifyContent:'space-around'
    },
    logo:{
        width:200,
        height:200,
        marginLeft:90,
        marginRight:80,
        marginTop:70
    

    },
    text1:{
        fontSize:30,
        fontWeight:'bold',
    
        textAlign:'center',
       

    },
    
    text3:{
        fontSize:19,
        marginBottom:30,
        fontWeight:'bold',
        textAlign:'center',
        with:'90%'
    },
    buttonContainer:{
        flexDirection:'row',
    },
    button:{
    paddingHorizontal: "35%",
    paddingVertical: 15,

    backgroundColor: "#F1C93B",

    alignItems: "center",
    justifyContent: "center",
    },
    buttonText:{
        //color:'#000',
        fontWeight:'bold',
        fontSize:15
    },
    searchItem:{
        alignItems:'center',
        flexDirection:'row',
        borderColor:'black',
        width:"80%",
        padding:15,
        backgroundColor:'#D3D3D3',

    },
    inputType:{
        flex:1, //kick thuoc cua input full chieu rong
        marginLeft:10,// khoang cach giua input va icon
    }
})