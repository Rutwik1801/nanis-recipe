import {createSlice,current} from '@reduxjs/toolkit'
// import { allData } from './allData';
// import DATA from '../data/dummy-meals-data'


 const initialState = {
     isLoggedIn:false
 }
  const authSlice =  createSlice({
                  name : 'authentication',
                  initialState:initialState, 
                  reducers : {

                              authenticate(state, action)
                              {
                                   state.isLoggedIn=true
                              }

                  },
               
   })
   export const authActions = authSlice.actions;
export const authReducer= authSlice.reducer;