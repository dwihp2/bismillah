import React from 'react';
import ProfileScreen from './ProfileScreen';
import HomeScreen from './HomeScreen';
import {createBottomTabNavigator} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

const bottomTabNavigatorConfig = {
    tabBarOptions: {
        activeTintColor: "tomato",
        inactiveTintColor: "grey",
        labelStyle: {fontSize:15}
    },
    defNavOpts: ({navigation}) => ({
        tabBarIcon: ({ focused, tintColor }) => {
            const {routeName} = navigation.state;
            let iconName;
            switch (routeName) {
                case "HOME":
                    iconName = "md-home";
                    break;
                case "PROFILE":
                    iconName = "md-person";
                    break;
                default:
                    break;
            }
            return <Ionicons name = {iconName} size={25} color={tintColor}/>;
        }
    })
}

export default createBottomTabNavigator ({
    HOME: {
        screen: HomeScreen
    },
    PROFILE:{
        screen:ProfileScreen
    }
},{
    tabBarOptions:bottomTabNavigatorConfig.tabBarOptions,
    defaultNavigationOptions:bottomTabNavigatorConfig.defNavOpts
})