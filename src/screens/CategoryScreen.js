import React from 'react'
import {StyleSheet, FlatList, TouchableOpacity,Platform,TouchableNativeFeedback } from 'react-native'
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridItem from '../components/CategoryGridItem'
const CategoryScreen=(props)=>{

    const renderGridItem=(itemData)=>{
        let TouchableCmp=TouchableOpacity
        if(Platform.OS==='android' && Platform.Version>=21){
            TouchableCmp=TouchableNativeFeedback
        }
        return(
            <CategoryGridItem navigation={props.navigation} itemData={itemData} />
        );
    }


    return(
<FlatList
style={{backgroundColor:'rgba(0,0,0,0.9)'}}
numColumns={2}
// horizontal={true}
keyExtractor={((item,index)=>{item.id})}
data={CATEGORIES}
renderItem={
    renderGridItem
}
 />
    );
}

export default CategoryScreen

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})