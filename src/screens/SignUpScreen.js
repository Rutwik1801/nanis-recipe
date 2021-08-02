import React,{useState} from 'react'
import {StyleSheet,View,ScrollView,Text,TouchableOpacity} from 'react-native'
import { useDispatch } from 'react-redux'
import AuthInput from '../components/AuthInput'
import { authActions } from '../store/authSlice'

const SignUpScreen=(props)=>{
 const dispatch = useDispatch()
    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'black',paddingHorizontal:30}}>
            <Text style={styles.subheading}>Sign Up To Access All The Recipes</Text>
            <Text style={styles.heading}>Sign Up</Text>

             <AuthInput placeholder='First Name' />
             <AuthInput placeholder='Last Name' />
             <AuthInput placeholder='Email' />
             <AuthInput placeholder='Password' />

            <TouchableOpacity
                onPress={()=>{
                    dispatch(authActions.authenticate())
                }}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{alignSelf:'flex-end',marginTop:30}}
            onPress={()=>{
                props.navigation.navigate('SignInScreen')
            }}
            >
                <Text style={{...styles.registerButton,textDecorationLine:'none',fontSize:16}}>Already A User?</Text>
                <Text style={{...styles.registerButton,textAlign:'right'}}>Sign In</Text>
            </TouchableOpacity>
        </View>
    );
}

export default SignUpScreen;


const styles=StyleSheet.create({
    subheading:{
        color:'rgba(255,255,255,0.8)',
        fontFamily:'nunito',
        fontSize:20,
        textAlign:'center',
        marginBottom:20
      },
      heading:{
          color:'white',
          fontFamily:'nunito',
          fontSize:30
      },
      button:{
          borderWidth:1,
          paddingHorizontal:40,
          paddingVertical:10,
          marginTop:20,
          borderRadius:1,
          borderColor:'white'
      },
      buttonText:{
          color:'white',
          letterSpacing:2,
          fontSize:18,
          fontFamily:'nunito'
  },
  registerButton:{
      color:'white',
      fontFamily:'nunito-light',
      textDecorationLine:'underline',
      fontSize:18,
      letterSpacing:1
  }
  
  })