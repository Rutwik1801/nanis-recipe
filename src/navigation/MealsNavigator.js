import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator,TransitionPresets } from '@react-navigation/stack';
import CategoryScreen from '../screens/CategoryScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen'
import colors from '../constants/colors'
import { Platform } from 'react-native';
import { mealOptions } from '../screens/CategoryMealsScreen';
import { mealDetailOptions } from '../screens/MealDetailScreen';
import LoginScreen from '../screens/LoginScreen'

const Stack = createStackNavigator();

const MealsNavigator = () => {
  return (
    // <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerStyle:{
                  backgroundColor: Platform.OS==='android'?'rgba(0,0,0,1)': ''
              },
              headerTintColor: Platform.OS==='android'? 'white': '',
              ...TransitionPresets.RevealFromBottomAndroid
      }}
      >
              {/* <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
    headerShown:false
    }}
        /> */}
        <Stack.Screen
          name="CategoryScreen"
          component={CategoryScreen}
          options={{
              headerTitle:'CATEGORIES',
              headerTitleStyle:{
        fontFamily:'nunito',
        textTransform:'uppercase',
        letterSpacing:1
    }
    }}
        />
        <Stack.Screen
         name="CategoryMealsScreen" 
         component={CategoryMealsScreen}
    options={mealOptions}
     />
        <Stack.Screen 
        name="MealDetailScreen" 
        component={MealDetailScreen}
        options={mealDetailOptions}

         />
                 <Stack.Screen 
        name="MealsFavTabNavigator" 
        component={MealDetailScreen}
        // options={mealDetailOptions}

         />
      </Stack.Navigator>
    // </NavigationContainer>
  );
};


export default MealsNavigator;

