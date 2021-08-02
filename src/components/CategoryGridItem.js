import React from 'react'
import { View,Text,StyleSheet, Button, FlatList, TouchableOpacity,Platform,TouchableNativeFeedback, Image } from 'react-native'
import { CATEGORIES } from '../data/dummy-data';

const CategoryGridItem=(props)=>{
    let TouchableCmp=TouchableOpacity
    if(Platform.OS==='android' && Platform.Version>=21){
        TouchableCmp=TouchableNativeFeedback
    }
return(
    <View style={styles.gridItem}>
    <TouchableCmp
    style={{flex:1}}
     onPress={()=>{
        props.navigation.navigate('CategoryMealsScreen',{
            categoryId:props.itemData.item.id
        })
    }}>
    <View style={{...styles.categoryContainer,overflow:'hidden'}}>
      <View style={styles.imgView}></View>
        <Image
        style={styles.img}
        source={{uri:props.itemData.item.imgUrl}}
         />

        <Text style={styles.categoryTitle}>{props.itemData.item.title}</Text>
    </View>
    </TouchableCmp>
    </View>
);
}

export default CategoryGridItem


const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    gridItem:{
        flex:1,
        margin:3,
        height:180
    },
    categoryContainer:{
        flex:1,
        alignItems:'flex-end',
        justifyContent:'flex-end',
        // padding:15,
        // borderRadius:5,
        // shadowColor:'black',
        // shadowOpacity:0.26,
        // shadowOffset:{width:0,height:2},
        // shadowRadius:10,
        // elevation:3
    },
     imgView:{
         flex:1,
         backgroundColor:'rgba(0,0,0,0.2)',
         zIndex:4,
         position:'absolute',
         height:180,
         width:190
        },
    img:{
        flex:1,
        zIndex:3,
        height:180,
        width:190,
        position:'absolute'
    },
    categoryTitle:{
        fontFamily: 'nunito-light' ,
        fontSize:14,
        letterSpacing:2,
        fontWeight: '100',
        textTransform:'uppercase',
        textAlign:'center',
        zIndex:4,
        color:'white',
        backgroundColor:'rgba(0,0,0,0.7)',
        width:'100%',
        padding:10
    }
})