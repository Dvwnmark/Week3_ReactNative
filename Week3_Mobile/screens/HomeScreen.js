import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({navigation}) {
    return(
        <View>
            <Button
                title='Click Here to Swap Screen 1'
                onPress={()=>navigation.navigate("Screen1")}
            />
            <Button
                title='Click Here to Swap Screen 2'
                onPress={()=>navigation.navigate("Screen2")}
            />
            <Button
                title='Click Here to Swap Screen 3'
                onPress={()=>navigation.navigate("Screen3")}
            />
            <Button
                title='Click Here to Swap Screen 4'
                onPress={()=>navigation.navigate("Screen4")}
            />
            <Button
                title='Click Here to Swap Screen 5'
                onPress={()=>navigation.navigate("Screen5")}
            />
            <Button
                title='Click Here to Swap Screen 6'
                onPress={()=>navigation.navigate("Screen6")}
            />
            <Button
                title='Click Here to Swap Screen 7'
                onPress={()=>navigation.navigate("Screen7")}
            />
            <Button
                title='Click Here to Swap Screen 8'
                onPress={()=>navigation.navigate("Screen8")}
            />

        </View>
    )

}