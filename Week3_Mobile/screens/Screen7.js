import React from "react"
import { Text } from "react-native"
import { View, StyleSheet } from "react-native"

    export default function Screen7() {
        return(
            <View style={styles.container}>
                <View> <Text>LOGIN</Text>  </View>
                
                
                <View></View>

            </View>
        )
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent:'center',
            marginBottom: 50
        },
        textLogin:{
            fontweight: 'bold',
            fontSize: 30,
        },
        login:{
            flexDirection: 'row',
            
        }
    });
    