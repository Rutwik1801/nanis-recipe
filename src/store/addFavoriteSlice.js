import {createSlice,current} from '@reduxjs/toolkit'
// import { allData } from './allData';
import DATA from '../data/dummy-meals-data'


 const initialState = {
     favorites:[]
 }
  const addFavoriteSlice =  createSlice({
                  name : 'addToFavorite',
                  initialState:initialState, 
                  reducers : {

                              addComponent(state, action)
                              {
                                const mealIdx=action.payload.id;
                                const existingIdx=state.favorites.findIndex(meal=>meal.id===action.payload.id)
                                if(existingIdx>=0){
                                   state.favorites.splice(existingIdx,1)
                                   console.log(current(state))
                                } else{
                                  const newComp={
                                    ...action.payload
                                 }
                                 state.favorites.push(newComp);       
                                 console.log(current(state))                         
                                }
                              }

                  },
               
   })
   export const addFavoriteActions = addFavoriteSlice.actions;
export const addFavoriteReducer= addFavoriteSlice.reducer;
