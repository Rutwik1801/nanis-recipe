import React from 'react'
import {Dimensions, View,Text,StyleSheet, Button, PLatform,FlatList,TouchableNativeFeedback,TouchableOpacity,Platform,Image } from 'react-native'
import CategoryMealItem from '../components/CategoryMealItem'
// import { CATEGORIES} from '../data/dummy-data'
import {MEALS} from '../data/dummy-meals-data'
import { useSelector } from 'react-redux'
import { addFavoriteReducer } from '../store/addFavoriteSlice'
// import colors from '../constants/colors'


const dimensions= {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
    }



const FavoritesScreen=(props)=>{


const renderMealItem=itemData=>{

    return(
       <CategoryMealItem itemData={itemData} navigation={props.navigation} />
    );
};



const displayedMeals=useSelector(state=>state.favorite.favorites)
    return(
<View style={styles.container}>

<FlatList 
data={displayedMeals}
numColumns={1}
keyExtractor={(item,index)=>item.id}
renderItem={renderMealItem}
/>
</View>

    );
}


export default FavoritesScreen

export const favScreenOptions={
    headerTitle:' Your Favorites',
    headerTitleStyle:{
        fontFamily:'nunito',
        textTransform:'uppercase',
        letterSpacing:1
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'black'
    }
})





