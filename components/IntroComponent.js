import React from 'react';
import {StyleSheet, Text, View } from 'react-native';

function Intro(props){
    return(
        <View style={styles.container}>
            <Text style={styles.text} >{props.text}</Text>
        </View>
    )
    
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal:50,
        marginVertical:20,
    },
    text:{
        color:'#d4d6bf',
        fontSize:26,
        textAlign:'center',
        fontStyle:'italic',
    }
})

export default Intro;