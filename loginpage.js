import React, {Component} from 'react';
import {StyleSheet,Text,View,TextInput,ScrollView,KeyboardAvoidingView,TouchableHighlight} from 'react-native';
//import { nama, email, password } from './App';
// godroneapp-lzuzm //APP ID
import { Stitch, AnonymousCredential } from 'mongodb-stitch-react-native-sdk';

//const MongoDB = require('mongodb-stitch-react-native-services-mongodb-remote');

//export const { nama, email, password } = this.state.formData;
export default class UsersManager extends Component {

    constructor(props) {
        super(props);
        this.state = {
          nama:''
        };
      }
    render () {
        
        return (
            <ScrollView>
                 <KeyboardAvoidingView style={styles.container} enabled>

                    <View style = {styles.row}>
                    <Text style = {styles.headerTxt}>Register</Text>
                    </View>

                    <View style = {styles.row}>
                        <TextInput
                        placeholder="Enter Name"
                        style = {styles.textInput}
                        underlineColorAndroid='magenta'
                        // onChangeText = {nama =>
                        //    this.setState(prevState => ({
                        //        formData:{
                        //            ...prevState.formData,
                        //            nama
                        //        }
                        //    }))
                        // }
                        // value={nama}  

                        value={this.state.nama}
                        onChangeText={text=>this.setState({nama:text})
                            } 
                        // onSubmitEditing={this.props.onSubmitEditing}                     
                        />
                    </View>
                    
                    <View style = {styles.row}>
                        <TextInput
                        placeholder="Enter Email"
                        style = {styles.textInput}
                        underlineColorAndroid='magenta'
                        keyboardType='email-address'
                        // onChangeText = {email =>
                        //    this.setState(prevState => ({
                        //        formData:{
                        //            ...prevState.formData,
                        //            email
                        //        }
                        //    }))
                        // }
                        // value={email}
                        />
                    </View>

                    <View style = {styles.row}>
                        <TextInput
                        placeholder="Enter Password"
                        style = {styles.textInput}
                        underlineColorAndroid='magenta'
                        // onChangeText = {password =>
                        //    this.setState(prevState => ({
                        //        formData:{
                        //            ...prevState.formData,
                        //            password
                        //        }
                        //    }))
                        // }
                        // value={password}
                        />
                    </View>

                    <Text style = {styles.label}>
                        {/* {JSON.stringify(this.state.formData)} */}
                        Test
                    </Text>
                    <TouchableHighlight 
                        //onPress = {this._saveData}
                        onPress = {this.props.onSubmitEditing} 
                        style = {styles.btnContainer}>                        
                            <Text style={styles.btnText}>Sign Up</Text>
                    </TouchableHighlight>

                </KeyboardAvoidingView>    
            </ScrollView>
        );
    }
    _saveData = () => {
        alert(JSON.stringify(this.state.formData));
    } 
}
 
const styles = StyleSheet.create ({
    container: {
        display: 'flex',
        alignItems:'center',
        justifyContent: 'center'
    },
    label: {
        fontSize:20
    },
    headerTxt: {
        marginTop:30,
        marginBottom:20,
        fontSize:40,
        color:'black',
    },
    row:{
        marginBottom:20
    },
    btnContainer: {
        backgroundColor:'#1a8',
        width:150,
        //height:60,
        padding:20,
        alignItems:'center'
    },
    btnText: {
        justifyContent:'center',
        fontSize:20,
        color:'white'
    },
    textInput: {
        width:200,
        borderWidth:1
    },
})