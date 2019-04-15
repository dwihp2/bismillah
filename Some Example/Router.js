import React, { Component } from 'react';
import {View, Text} from 'react-native';
import {createAppContainer,createTabNavigator, createStackNavigator, createMaterialTopTabNavigator, createBottomTabNavigator} from 'react-navigation';

import Hal1 from './Halaman1';
import Hal2 from './Halaman2';
import Hal3 from './Halaman3';
import About from './About';
import Login from './Login';
import SignUp from './SignUp';

import FooterTab from './FooterTab';
import { Footer } from 'native-base';

 const TabNavigate = createBottomTabNavigator ({
    Halaman1:{screen:Hal1,},
    Halaman2:{screen:Hal2,},
    Halaman3:{screen:Hal3,},
},
{
    initialRouteName:'Halaman1',
    //tabBarPosition:'bottom',
    animationEnabled: true,
    swipeEnabled:false,
    tabBarComponent: props => {
        return (
            <FooterTab navigation = {props.navigation}/>
        )
    }
});

const StackOverTabs = createStackNavigator ({
    Root: {screen:TabNavigate},
    GotoAbout: {screen:About}
});

export const SignedOut = createStackNavigator ({
    Login: {screen:Login, defaultnavigationOptions:{header:null}},
    SignUp: {screen:SignUp, defaultnavigationOptions:{header:null}},
});

export const StackOverTabs = createAppContainer(StackOverTabs);
export const TabNavigate = createAppContainer(TabNavigate);

// export default StackOverTabs;

