import {configureStore} from '@reduxjs/toolkit'
import {addFavoriteReducer} from './addFavoriteSlice'
import { authReducer } from './authSlice'
               
  export const store = configureStore({ 
                  reducer : {
                    favorite:addFavoriteReducer,
                    auth:authReducer
                  }
                  
   })