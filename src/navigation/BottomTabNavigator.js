import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import First from '../screens/First'
import Second from '../screens/Second'
import Third from '../screens/Third'
import Fourth from '../screens/Fourth'

const BottomTabNavigator = createBottomTabNavigator({
    1: First,
    2: Second,
    3: Third,
    4: Fourth
})

export default BottomTabNavigator; 
