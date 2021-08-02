import React from 'react';
import { favScreenOptions } from '../screens/FavoritesScreen';
import { createStackNavigator,TransitionPresets } from '@react-navigation/stack';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen'
import { mealDetailOptions } from '../screens/MealDetailScreen';

const Stack = createStackNavigator();

const FavNavigator = () => {
  return (
    // <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerStyle:{
                  backgroundColor: Platform.OS==='android'?'rgba(0,0,0,1)': ''
              },
              headerTintColor: Platform.OS==='android'? 'white': '',
              ...TransitionPresets.RevealFromBottomAndroid,
              style:{
                fontFamily:'nunito'
              }
      }}
      >
      
                 <Stack.Screen 
        name="Favorites" 
        component={FavoritesScreen}
        options={favScreenOptions}

         />
                          <Stack.Screen 
        name="MealDetailScreen" 
        component={MealDetailScreen}
        options={mealDetailOptions}
         />
      </Stack.Navigator>
    // </NavigationContainer>
  );
};


export default FavNavigator;

