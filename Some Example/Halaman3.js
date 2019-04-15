import React, { Component } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default class Home extends Component{
render(){
return(
<View>
<Text>Halaman tiga</Text>
<TouchableOpacity onPress={()=> this.props.navigation.navigate('GotoAbout')}>
    <Text>Button About</Text>
</TouchableOpacity>
</View>
)}}