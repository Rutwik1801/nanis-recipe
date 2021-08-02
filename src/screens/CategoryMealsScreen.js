// import React from 'react'
// import {Dimensions, View,Text,StyleSheet, Button, PLatform,FlatList,TouchableNativeFeedback,TouchableOpacity,Platform,Image } from 'react-native'
// import { CATEGORIES} from '../data/dummy-data'
// import {MEALS} from '../data/dummy-meals-data'
// import colors from '../constants/colors'


// const dimensions= {
//     width: Dimensions.get('window').width,
//     height: Dimensions.get('window').height
//     }

// const CategoryMealsScreen=(props)=>{

// const renderMealItem=itemData=>{
//     let TouchableCmp=TouchableOpacity
//     if(Platform.OS==='android' && Platform.Version>=21){
//         TouchableCmp=TouchableNativeFeedback
//     }
//     return(
//         <View style={styles.gridItem}>
//         <TouchableCmp
//         style={{flex:1}}
//         onPress={()=>{
//             props.navigation.navigate('MealDetailScreen',{
//                 mealId:itemData.item.id
//             })
//         }}
//         >
//         <View style={{...styles.categoryContainer,backgroundColor:itemData.item.color,overflow:'hidden'}}>
//           <View style={styles.imgView}></View>
//             <Image
//             style={styles.img}
//             source={{uri:itemData.item.imgUrl}}
//              />
//  <View>
//  <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',zIndex:4}}>
//      <Text style={styles.categorySubTitle}>{itemData.item.complexity}</Text>
//      <Text style={{...styles.categorySubTitle,textTransform:'lowercase'}}>{itemData.item.duration}m</Text>
//      <Text style={styles.categorySubTitle}>{itemData.item.affordability}</Text>
//  </View>
//  <Text style={styles.categoryTitle}>{itemData.item.title}</Text>
//  </View>
//         </View>
//         </TouchableCmp>
//         </View>
//     );
// };


// const catId=props.route.params.categoryId


// const displayedMeals=MEALS.filter(meal=>(meal.categoryIds.includes(catId)))

//     return(
// <View style={styles.container}>

// <FlatList 
// data={displayedMeals}
// numColumns={1}
// keyExtractor={(item,index)=>item.id}
// renderItem={renderMealItem}
// />
// </View>

//     );
// }

// export const mealOptions=(navigationData)=>{
//     const catId=navigationData.route.params ? navigationData.route.params.categoryId:null
//     const selectedCategory=CATEGORIES.find(cat=>cat.id===catId)
//     return(
//         {
//             headerTitle:selectedCategory.title
//         }
//     );
// }

// export default CategoryMealsScreen

// const styles=StyleSheet.create({
//     container:{
//         flex:1,
//         justifyContent:'center',
//         alignItems:'center',
//         backgroundColor:'black'
//     },
//     gridItem:{
//         flex:1,
//         margin:3,
//         height:220
//     },
//     categoryContainer:{
//         flex:1,
//         alignItems:'flex-end',
//         justifyContent:'flex-end',
//         // padding:15,
//         // borderRadius:5,
//         // shadowColor:'black',
//         // shadowOpacity:0.26,
//         // shadowOffset:{width:0,height:2},
//         // shadowRadius:10,
//         // elevation:3
//     },
//      imgView:{
//          flex:1,
//          backgroundColor:'rgba(0,0,0,0.3)',
//          zIndex:4,
//          position:'absolute',
//          height:220,
//         //  width:'100%'
//           width:dimensions.width*0.95
//     },
//     img:{
//         flex:1,
//         zIndex:3,
//         height:220,
//         // width:'100%',
//         width:dimensions.width*0.95,
//         position:'absolute'
//     },
//     categoryTitle:{
//         fontSize:14,
//         letterSpacing:2,
//         fontWeight: '100',
//         textTransform:'uppercase',
//         textAlign:'center',
//         zIndex:4,
//         color:'white',
//         backgroundColor:'rgba(0,0,0,0.7)',
//         // width:'100%',
//         width:dimensions.width*0.95,
//         padding:10,
//     },
//     categorySubTitle:{
//         fontSize:10,
//         letterSpacing:2,
//         fontWeight: 'bold',
//         textTransform:'uppercase',
//         // textAlign:'center',
//         zIndex:4,
//         color:'white',
//         // backgroundColor:'rgba(0,0,0,0.7)',
//         // width:'100%',
//         // width:dimensions.width*0.95,
//         padding:10,
//     }
// })




import React from 'react'
import {Dimensions, View,StyleSheet,FlatList} from 'react-native'
import { CATEGORIES} from '../data/dummy-data'
import {MEALS} from '../data/dummy-meals-data'
import CategoryMealItem from '../components/CategoryMealItem'


const CategoryMealsScreen=(props)=>{

const renderMealItem=itemData=>{
   
    return(
       <CategoryMealItem navigation={props.navigation} itemData={itemData} />
    );
};


const catId=props.route.params.categoryId


const displayedMeals=MEALS.filter(meal=>(meal.categoryIds.includes(catId)))

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

export const mealOptions=(navigationData)=>{
    const catId=navigationData.route.params ? navigationData.route.params.categoryId:null
    const selectedCategory=CATEGORIES.find(cat=>cat.id===catId)
    return(
        {
            headerTitle:selectedCategory.title,
            headerTitleStyle:{
                fontFamily:'nunito',
                textTransform:'uppercase',
                letterSpacing:1
            }
        }
    );
}

export default CategoryMealsScreen

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'black'
    }
})


