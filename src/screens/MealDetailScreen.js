import React,{useEffect} from 'react'
import { MEALS } from '../data/dummy-meals-data'
import {HeaderButtons,Item} from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/HeaderButton'
import MealDetailComponent from '../components/MealDetailComponent'
import { useDispatch,useSelector } from 'react-redux'
import { addFavoriteActions } from '../store/addFavoriteSlice'


const MealDetailScreen=(props)=>{
    const dispatch = useDispatch()
    const mealId=props.route.params.mealId
    const currentMealIsFavOrNot=useSelector(state=>state.favorite.favorites.some(meal=>meal.id===mealId))
    const selectedMeal=MEALS.find(meal=>meal.id===mealId)
    

    useEffect(()=>{
        props.navigation.setParams({isFav:currentMealIsFavOrNot})
    },[currentMealIsFavOrNot])
    
    return(
<MealDetailComponent selectedMeal={selectedMeal} mealId={mealId} />
    );
}

export default MealDetailScreen;







export const mealDetailOptions=(navigationData)=>{
    const dispatch = useDispatch()
    const mealId=navigationData.route.params ? navigationData.route.params.mealId:null
    const isFavorite=navigationData.route.params ? navigationData.route.params.isFav : null
    const selectedMeal=MEALS.find(meal=>meal.id===mealId)
    return(
        {
            headerTitle:selectedMeal.title,
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                  <Item title="search" iconName="star" color={isFavorite ? 'yellow' : 'white'} onPress={() =>{dispatch(addFavoriteActions.addComponent({...selectedMeal}))}} />
                </HeaderButtons>
              )

        }
    );
}


// import React,{useEffect} from 'react'
// import { MEALS } from '../data/dummy-meals-data'
// import {HeaderButtons,Item} from 'react-navigation-header-buttons'
// import CustomHeaderButton from '../components/HeaderButton'
// import MealDetailComponent from '../components/MealDetailComponent'
// import { useDispatch,useSelector,useCallback } from 'react-redux'
// import { addFavoriteActions } from '../store/addFavoriteSlice'


// const MealDetailScreen=(props)=>{
//     const dispatch = useDispatch()
//     const mealId=props.route.params.mealId
//     const currentMealIsFavOrNot=useSelector(state=>state.favorite.favorites.some(meal=>meal.id===mealId))
//     const selectedMeal=MEALS.find(meal=>meal.id===mealId)
    
//    const addToFavHandler=
//    useCallback(
//        ()=>{
//        dispatch(addFavoriteActions.addComponent({...selectedMeal}))
//    }
//    ,[dispatch,selectedMeal])

//     useEffect(()=>{
//         props.navigation.setParams({addToFav:addToFavHandler})
//     },[addToFavHandler])

//     useEffect(()=>{
//         props.navigation.setParams({isFav:currentMealIsFavOrNot})
//     },[currentMealIsFavOrNot])
    
//     return(
// <MealDetailComponent selectedMeal={selectedMeal} mealId={mealId} />
//     );
// }

// export default MealDetailScreen;







// export const mealDetailOptions=(navigationData)=>{
//     const dispatch = useDispatch()
//     const mealId=navigationData.route.params ? navigationData.route.params.mealId:null
//     const isFavorite=navigationData.route.params ? navigationData.route.params.isFav : null
//     const addToFavorite=navigationData.route.params ? navigationData.route.params.addToFav : null
//     const selectedMeal=MEALS.find(meal=>meal.id===mealId)
//     return(
//         {
//             headerTitle:selectedMeal.title,
//             headerRight: () => (
//                 <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
//                   <Item title="search" iconName="star" color={isFavorite ? 'yellow' : 'white'} onPress={addToFavorite} />
//                 </HeaderButtons>
//               )

//         }
//     );
// }

