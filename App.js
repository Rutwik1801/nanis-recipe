
import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MealsNavigator from './src/navigation/MealsNavigator';
import MealsFavTabNavigator from './src/navigation/MealsTabNavigator';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux'
import { store } from './src/store/store'
import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font'
import AuthNavigator from './src/navigation/authNavigator';
const fetchFonts=()=>{
  return Font.loadAsync({
    'nunito':require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-light':require('./assets/fonts/Nunito-Light.ttf'),
    'nunito-bold':require('./assets/fonts/Nunito-Bold.ttf')
  });
}
enableScreens();

export default function App() {
  const [fontLoaded,setFontLoaded]=useState(false)
  if(!fontLoaded) {
    return (
      <AppLoading startAsync={fetchFonts} onFinish={()=>{setFontLoaded(true)}} onError={(err) => console.log(err)} />
    );
  }
   else{
    return (
      <Provider store={store}>
       {/* <MealsFavTabNavigator /> */}
       <AuthNavigator />
      </Provider>
     );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
