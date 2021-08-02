import React from 'react'
import { View,Text,StyleSheet,ScrollView,Dimensions ,Image, ImageBackground} from 'react-native'
import { useSelector } from 'react-redux'

const dimensions= {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
    }


const MealDetailComponent=(props)=>{



    return(
        <ScrollView  style={{backgroundColor:'rgba(0,0,0,0.9)',flex:1}}>
<View>
    <View>
        <ImageBackground
        source={{uri:props.selectedMeal.imgUrl}}
        style={{width:dimensions.width,height:200}}
         />
    </View>

        <View style={{paddingHorizontal:10,paddingVertical:20}}>

        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
     <Text style={styles.categorySubTitle}>{props.selectedMeal.complexity}</Text>
     <Text style={{...styles.categorySubTitle,textTransform:'lowercase'}}>{props.selectedMeal.duration} mins</Text>
     <Text style={styles.categorySubTitle}>{props.selectedMeal.affordability}</Text>
 </View>

            <Text style={{color:'white',fontSize:18,textTransform:'uppercase',letterSpacing:2,marginVertical:20,fontFamily:'nunito-light'}}>Ingredients</Text>
            {
                props.selectedMeal.ingredients.map(item=>{
                    return(
                        <View style={{marginBottom:20}}>
                            <Text style={{fontSize:16,color:'rgba(255,255,255,0.7)',letterSpacing:1,fontFamily:'nunito'}}>
                            {item}
                            </Text>
                        </View>
                    );
                })
            }
            <Text style={{color:'white',fontSize:18,textTransform:'uppercase',letterSpacing:2,marginVertical:20,fontFamily:'nunito-light'}}>Procedure</Text>
            {
                props.selectedMeal.steps.map(item=>{
                    return(
                        <View style={{marginBottom:20}}>
                            <Text style={{fontSize:16,color:'rgba(255,255,255,0.7)',fontFamily:'nunito',letterSpacing:1}}>
                            - {item}
                            </Text>
                        </View>
                    );
                })
            }
        </View>
</View>
    </ScrollView>
    );
}

export default MealDetailComponent;

const styles=StyleSheet.create({
    categorySubTitle:{
        fontSize:10,
        letterSpacing:2,
        // fontWeight: 'bold',
        textTransform:'uppercase',
        color:'white',
        padding:10,
        fontFamily:'nunito-bold'
    }
})