import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CategoryScreen from '../screens/CategoryScreen';
import FavoritesScreen from '../screens/FavoritesScreen'
import { MaterialIcons } from '@expo/vector-icons';
import MealsNavigator from './MealsNavigator';
import FavNavigator from './FavNavigator';


const Tab = createBottomTabNavigator();

export default function MealsFavTabNavigator() {
  return (
    // <NavigationContainer>
      <Tab.Navigator
           tabBarOptions={{
         activeTintColor:'white',
        style:{
            backgroundColor:'black',
            paddingBottom:5,
            height:60,
            borderTopColor:'black',
            borderTopWidth:1

        },
         labelStyle:{
             fontSize:14,
             letterSpacing:1,
             fontFamily:'nunito-light'
         }
     }}
      >
      
        <Tab.Screen name="Meals"
         component={MealsNavigator}
         options={{
           tabBarLabel:'Categories',
           tabBarIcon:({color,size})=>(
            <MaterialIcons name="restaurant-menu" size={30} color={color} />
           )
         }
         }
          />
        <Tab.Screen
         name="Favorites" 
         component={FavNavigator} 
         options={{
           tabBarLabel:'Favorites!',
           tabBarIcon:({color,size})=>(
            <MaterialIcons name="star-border" size={30} color={color} />
           )
         }
         }
         />
      </Tab.Navigator>
      // </NavigationContainer> 
  );
}


