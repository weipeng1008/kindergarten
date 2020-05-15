import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Kindergarten from '../components/Kindergarten';
import KindergartenDetail from '../components/kindergartenDetail';

const screens = {
    Kindergarten: {
        screen: Kindergarten,
       
    },

    KindergartenDetail: {
        screen: KindergartenDetail,
    }
}

const kindergartenStack = createStackNavigator(screens);

export default createAppContainer(kindergartenStack);