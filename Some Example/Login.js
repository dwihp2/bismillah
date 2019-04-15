import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import {NavigationActions} from 'react-navigation';

export default class Login extends Component {
    Login() {
        var {dispatch,navigate} = this.props.navigation;
        const reset = NavigationActions.reset({
            index:0,
            key:null,
            actions: [
                NavigationActions.navigate({routeName:'StackOverTabs'})
            ]
        });        
        dispatch(reset);
    }
    render() {
        return(
            <View
                behavior="padding"
                style = {StyleSheet.wrapper}
            >
                <TextInput
                    placeholder = 'Username'
                    underlineColorAndroid='white'
                    placeholderTextColor='white'
                    keyboardType='default'
                    style={StyleSheet.inputField}
                />

                <TouchableOpacity onPress={this.Login.bind(this)}>
                    <Text style={{color:'white', marginTop:10}}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this.navigation.navigate('SignUp')}>
                    <Text style={{color:'white', marginTop:10}}>SignUp</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    inputField: {
        width:280,
        color:'white',
        borderColor:'white',
        marginTop:5
    },
    wrapper: {
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#1f3a93'
    },
    text:{
        color:'blue',
        fontSize:23
    }
});