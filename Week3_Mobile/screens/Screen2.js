import { LinearGradient } from 'expo-linear-gradient';
import  React from 'react';
import { View, Text, StyleSheet, Image, Button, Touchable, TouchableOpacity, StatusBar } from 'react-native';
export default function Screen2() {
    return (
        <LinearGradient colors={["rgba(0,156,199,1)","rgba(255,255,255,1)",""]}
            style={styles.gradientBackground} >
                <View style={styles.container}>
                    <Image 
                        style={styles.logo}
                        source={require('../assets/logo.png')}
                    />
                    <Text style={styles.text1}>GROW{"\n"}YOUR BUSINESS</Text>
                <Text  style={styles.text3}>
                    We will help you to grow your business using 
                    {"\n"}online server

                </Text>
                
                <View style={styles.buttonContainer}>
                
                    <TouchableOpacity style={styles.button}>
                    <Text style ={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>SIGN UP</Text>
                    </TouchableOpacity>
                    </View>
                    <Text style={styles.text2}>HOW WE WORK?</Text>
                
                <StatusBar style={"auto"}></StatusBar>
                </View>
                

            </LinearGradient>
        )
}


const styles = StyleSheet.create({
    gradientBackground:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#33CCFF',
        
        justifyContent:'space-between'
    },
    logo:{
        width:200,
        height:200,
        marginTop:50
    },
    text1:{
        fontSize:30,
        fontWeight:'bold',
        color:'#000',
        textAlign:'center'
    },
    text2:{
        fontSize:21,
        fontWeight:'bold',
        marginTop:30,
        textAlign:"center"
    },
    text3:{
        fontSize:19,
        color:'#000',
        fontWeight:'bold',
        textAlign:'center'
    },
    buttonContainer:{
        flexDirection:'row',
    },
    button:{
        backgroundColor:'#FFFF33',
       // padding:10,
      //  margin:10,
        borderRadius:10,
        marginHorizontal:50,
        width:100,
        paddingVertical:10,
        justifyContent:'center',
        alignItems:'center'
    },
    buttonText:{
        color:'black',
        fontWeight:'bold',
        fontSize:15
    }
    

})