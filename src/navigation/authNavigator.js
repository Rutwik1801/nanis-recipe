import React from 'react'
import { createStackNavigator ,TransitionPresets} from '@react-navigation/stack'
import LoginScreen from '../screens/LoginScreen'
import MealsFavTabNavigator from './MealsTabNavigator'
import { NavigationContainer } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import SignUpScreen from '../screens/SignUpScreen'
const Stack=createStackNavigator()


const AuthNavigator=()=>{
    const isLoggedIn=useSelector(state=>state.auth.isLoggedIn)
    return(
        <NavigationContainer>
        <Stack.Navigator>
        {isLoggedIn ?
    <>
    <Stack.Screen 
                name='AuthScreen'
                component={MealsFavTabNavigator}  
                options={{
                    headerShown:false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}   
            />
    </>
    :
    <>
    <Stack.Screen 
                name='SignInScreen'
                component={LoginScreen}     
                options={{
                    headerShown:false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            /> 
                <Stack.Screen 
                name='SignUpScreen'
                component={SignUpScreen}     
                options={{
                    headerShown:false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />   
    </>
    }
        </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AuthNavigator