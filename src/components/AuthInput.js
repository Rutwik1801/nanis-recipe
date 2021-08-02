import React,{useState} from 'react'

import {StyleSheet,View,ScrollView,Text,Button,TextInput, TouchableOpacity} from 'react-native'

const AuthInput=(props)=>{
    const [borderColor,setBorderColor]=useState('white')
    return(
        <TextInput
        onFocus={()=>{
            setBorderColor('yellow')
        }}
        onBlur={()=>{
            setBorderColor('white')
        }}
        style={{...styles.authInput,borderBottomColor:borderColor}}
        placeholder={props.placeholder}
        placeholderTextColor='rgba(255,255,255,0.6)'
         />
    );
}

export default AuthInput;

const styles=StyleSheet.create({
    authInput:{
        borderBottomWidth:1,
        width:'100%',
        fontFamily:'nunito',
        // borderBottomColor:{borderColor},
        letterSpacing:1,
        color:'white',
    marginVertical:20
}
})