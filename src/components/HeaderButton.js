import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import {HeaderButton} from 'react-navigation-header-buttons'
import {FontAwesome} from '@expo/vector-icons'
import { useSelector } from 'react-redux'
import colors from '../constants/colors'
import { addFavoriteReducer } from '../store/addFavoriteSlice'

const CustomHeaderButton=(props)=>{

    return(
        <HeaderButton {...props} IconComponent={FontAwesome} iconSize={23} color={props.color} />
    );
}


export default CustomHeaderButton;