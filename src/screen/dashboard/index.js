import ProfileScreen from './ProfileScreen';
import HomeScreen from './HomeScreen';
import {createBottomTabNavigator} from 'react-navigation';

export default createBottomTabNavigator ({
    HOME: {
        screen: HomeScreen
    },
    PROFILE:{
        screen:ProfileScreen
    }
})