import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import About from '../components/about';

const screens = {
    About: {
        screen: About,   
    }
}

const aboutStack = createStackNavigator(screens);

export default createAppContainer(aboutStack);