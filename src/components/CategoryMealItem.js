import React from 'react'
import {Dimensions, View,Text,StyleSheet,TouchableNativeFeedback,TouchableOpacity,Platform,Image } from 'react-native'


const dimensions= {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
    }


    const CategoryMealItem=(props)=>{

            let TouchableCmp=TouchableOpacity
            if(Platform.OS==='android' && Platform.Version>=21){
                TouchableCmp=TouchableNativeFeedback
            }

   return(
    <View style={styles.gridItem}>
    <TouchableCmp
    style={{flex:1}}
    onPress={()=>{
        props.navigation.navigate('MealDetailScreen',{
            mealId:props.itemData.item.id
        })
    }}
    >
    <View style={{...styles.categoryContainer,backgroundColor:props.itemData.item.color,overflow:'hidden'}}>
      <View style={styles.imgView}></View>
        <Image
        style={styles.img}
        source={{uri:props.itemData.item.imgUrl}}
         />
<View>
<View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',zIndex:4}}>
 <Text style={styles.categorySubTitle}>{props.itemData.item.complexity}</Text>
 <Text style={{...styles.categorySubTitle,textTransform:'lowercase'}}>{props.itemData.item.duration}m</Text>
 <Text style={styles.categorySubTitle}>{props.itemData.item.affordability}</Text>
</View>
<Text style={styles.categoryTitle}>{props.itemData.item.title}</Text>
</View>
    </View>
    </TouchableCmp>
    </View>
   );
    }

    export default CategoryMealItem;


    const styles=StyleSheet.create({
        container:{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'black'
        },
        gridItem:{
            flex:1,
            margin:3,
            height:220
        },
        categoryContainer:{
            flex:1,
            alignItems:'flex-end',
            justifyContent:'flex-end',
        },
         imgView:{
             flex:1,
             backgroundColor:'rgba(0,0,0,0.3)',
             zIndex:4,
             position:'absolute',
             height:220,
              width:dimensions.width*0.95
        },
        img:{
            flex:1,
            zIndex:3,
            height:220,
            width:dimensions.width*0.95,
            position:'absolute'
        },
        categoryTitle:{
            fontFamily:'nunito-light',
            fontSize:14,
            letterSpacing:2,
            fontWeight: '100',
            textTransform:'uppercase',
            textAlign:'center',
            zIndex:4,
            color:'white',
            backgroundColor:'rgba(0,0,0,0.7)',
            width:dimensions.width*0.95,
            padding:10,
        },
        categorySubTitle:{
            fontFamily:'nunito-bold',
            fontSize:10,
            letterSpacing:2,
            // fontWeight: 'bold',
            textTransform:'uppercase',
            zIndex:4,
            color:'white',
            padding:10,
        }
    })