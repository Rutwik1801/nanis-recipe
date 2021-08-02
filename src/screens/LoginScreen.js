import React,{useState} from 'react'
import {StyleSheet,View,ScrollView,Text,TouchableOpacity} from 'react-native'
import { useDispatch } from 'react-redux'
import AuthInput from '../components/AuthInput'
import { authActions } from '../store/authSlice'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const LoginScreen=(props)=>{


 const dispatch = useDispatch()

    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'black',paddingHorizontal:30}}>
            <Text style={styles.subheading}>Welcome!!! A quick Step before You Proceed...</Text>
            <Text style={styles.heading}>Sign In</Text>

             <AuthInput placeholder='Email' />
             <AuthInput placeholder='Password' />

            <TouchableOpacity
                onPress={()=>{
                    dispatch(authActions.authenticate())
                }}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={{marginTop:30,width:'100%'}}
                onPress={()=>{
                    dispatch(authActions.authenticate())
                }}
                // style={styles.button}
            >
            <View style={{borderRadius:2,flexDirection:'row',alignItems:'center',justifyContent:'center',paddingVertical:10,paddingHorizontal:20,backgroundColor:'red',width:'100%'}}>
            <MaterialCommunityIcons name="google" size={28} color='white' style={{marginRight:10}} />
            <Text style={styles.buttonText}>Sign In with Google</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={()=>{
                props.navigation.navigate('SignUpScreen')
            }}
            style={{alignSelf:'flex-end',marginTop:30}}
            >
                <Text style={styles.registerButton}>Create an Account</Text>
            </TouchableOpacity>
               {/* <Text style={{color:'white'}}>efrtg </Text> */}
        </View>
    );
}

export default LoginScreen;

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
        borderColor:'white',
        width:'100%'
    },
    buttonText:{
        textAlign:'center',
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