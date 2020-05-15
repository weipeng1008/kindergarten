import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import kindergartenStack from './kindergartenStack';
import aboutStack from './aboutStack';
import {MaterialIcons} from '@expo/vector-icons';
import React from 'react';

const TabNavigator = createBottomTabNavigator({
    Kindergarten: {
        screen: kindergartenStack,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({tintColor}) => (
                <MaterialIcons name="home" size={28} />
            )
        }
    },

    About: {
        screen: aboutStack,
        navigationOptions: {
            tabBarLabel: 'Info',
            tabBarIcon: ({tintColor}) => (
                <MaterialIcons name="info" size={28} />
            )
        }
    }
  });
  
  export default createAppContainer(TabNavigator);