import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

export default class SignUp extends Component {
    render() {
        return (
            <View
                behavior="padding"
                style = {StyleSheet.wrapper}>

                <Text style = {{fontSize:23, color:'white'}}>Daftar</Text>

                <TextInput
                    placeholder='Username'
                    underlineColorAndroid='white'
                    placeholderTextColor='white'
                    keyboardType='default'
                    style={StyleSheet.inputField}
                />

                <TextInput
                    placeholder='Password'
                    underlineColorAndroid='white'
                    placeholderTextColor='white'
                    secureTextEntry={true}
                    style={StyleSheet.inputField}
                />

                <View>
                    <Text style = {{color:'white',fontSize:14,marginTop:10}}>Kembali</Text>
                </View>

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