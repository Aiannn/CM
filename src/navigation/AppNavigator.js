import React from 'react'
import { createAppContainer, createSwitchNavigator } from '@react-navigation/native'

import BottomTabNavigator from './BottomTabNavigator'

export default createAppContainer(
    createSwitchNavigator({
        Main: BottomTabNavigator
    })
)
