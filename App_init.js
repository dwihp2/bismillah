/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  AppRegistry,
  ScrollView
} from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createTabNavigator,
  createDrawerNavigator,
  StackActions,
  createMaterialTopTabNavigator
} from "react-navigation";
import UsersManager from "./loginpage";
import style from "./loginpage";
// godroneapp-lzuzm //APP ID
import { Stitch, AnonymousCredential } from 'mongodb-stitch-react-native-sdk';

// import console = require("console");
//import { nama, email, password } from './Loginpage';

// const { Stitch, AnonymousCredential } = 
//         require('mongodb-stitch-react-native-sdk');
// const MongoDB = require('mongodb-stitch-react-native-services-mongodb-remote');

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

// Stitch.initializeDefaultAppClient('godroneapp-lzuzm').then(client => {
//   // use the client
//   const client = Stitch.defaultAppClient;
// });

//type Props = {};
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        nama:"",
        //email:"",
        //password:""
      }
    };

    this.onSubmitEditing=this.onSubmitEditing.bind(this);
  }
  onSubmitEditing(name){
    this.setState(prevState => ({
             formData:{
                 ...prevState.formData,
                 nama:name
             }
         }))
         alert("Nama: ",this.state.nama);
        }



  // onSubmitEditing(name){
  //   this.setState({
  //     nama:name
  //   })
  //   alert("Nama: ",this.state.nama);
  // }
  render() {
    // const { nama, email, password } = this.state.formData;
    return (
      <UsersManager onSubmitEditing={this.onSubmitEditing} />
    );
  }
  _saveData = () => {
    alert(JSON.stringify(this.state.formData));
  };
}

//const FrontPage = createAppContainer(SignedOut);

// const styles = StyleSheet.create({
//   container: {
//     display:'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     //flexDirection:'column',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
//   button: {
//     flex:1,
//     justifyContent:'flex-end',
//   }
// });

// class HomeDrawer extends React.Component {
//   render() {
//     //const {navigate} = this.props.navigation;
//     return (
//       <View style = {{
//         display: 'flex',
//         justifyContent: 'center',
//         }}>
//       <View>
//         <Text>Halaman Pengirim</Text>
//         <View style={{
//           height:'80%'
//           }}>
//           <Text>Something</Text>
//         </View>
//         <View
//           style={{
//             display:'flex',
//             justifyContent:'space-around',
//             flexDirection:'row'
//           }}
//         >

//           <Button
//             title = "Pengirim"
//             onPress = {() => this.props.navigation.navigate ('Pengirim')}
//           />
//           <Button
//             title = "Penerima"
//             onPress = {() => this.props.navigation.navigate ('Penerima')}
//           />
//         </View>
//           </View>
//       </View>
//     )
//   }
// }

// class SenderDrawer extends React.Component {
//   render() {
//     return <Text>Halaman Pengirim</Text>
//     // (
//     //   //<Login color={'#58f19'}></Login>
//     // )
//   };
// }

// class ReceiverDrawer extends React.Component {
//   render() {
//     return <Text>Halaman Penerima</Text>
//   }
// }

// const MainScreenNavigator = createStackNavigator ({
//   Home: HomeDrawer,
//   // {
//   //   screen: HomeDrawer
//   // },
//   Pengirim: SenderDrawer,
//   // {
//   //   screen: SenderDrawer
//   // },
//   Penerima: ReceiverDrawer
//   // {
//   //   screen: ReceiverDrawer
//   // },
// },
// {
//   initialRouteName: 'Home',
// }
// );

// // const Homepage = createStackNavigator ({
// //   HomePage: {
// //     screen: MainScreenNavigator,
// //     navigationOptions:{
// //       title:'Home Page',
// //     },
// //   }
// // });

// const AppContainer = createAppContainer (MainScreenNavigator);

//AppRegistry, registerComponent('bismillah', () => MainScreenNavigator);
// const TabNavigator = createTabNavigator(
//   {
//     Home: {
//       screen:HomeScreen,
//     },
//     Penerima: {
//       screen:SenderScreen,
//     },
//     Pengirim: {
//       screen:ReceiverScreen,
//      }
//   }, {
//     initialRouteName: "home",
//     backBehavior: "none",
//     tabBarPosition: "top"
//   }
// );
//   // {
//   //   initialRouteName: "Home"
//   // }

// const AppContainer = createAppContainer(TabNavigator);

//export default createAppContainer(AppNavigator);
// class HomeScreen extends React.Component {

//   _goToSender = () => {
//     const pushAction = StackActions.push ({
//       routeName: 'Pengirim',
//       params: {
//         myUserId: 9,
//       },
//     });
//     this.props.navigation.dispatch(pushAction);
//   }

//   _goToReceiver = () => {
//     const pushAction = StackActions.push ({
//       routeName: 'Penerima',
//       params: {
//         myUserId: 10,
//       },
//     });
//     this.props.navigation.dispatch(pushAction);
//   }
//   render() {
//     return (
//       <View style = {{flex:1, alignItems: 'center', justifyContent: 'center'}}>
//         <Button
//           title= "Pengirim"
//           onPress = {this._goToSender}/>
//         <Button
//           title = "Penerima"
//           onPress = {this._goToReceiver}/>
//       </View>
//     )
//   }
// }

// class SenderScreen extends React.Component {
//   _goHome = () => {
//     const popAction = StackActions.pop({
//       n:1,
//     });
//     this.props.navigation.dispatch(popAction);
//   }
//   render() {
//     return (
//       <View style = {{flex:1, alignItems: 'center', justifyContent: 'center'}}>
//         <Button
//           title = "Back to Home"
//           onPress = {this._goHome}/>
//       </View>
//     )
//   }
// }

// class ReceiverScreen extends React.Component {
//   _goHome = () => {
//     const popAction = StackActions.pop({
//       n:1,
//     });
//     this.props.navigation.dispatch(popAction);
//   }
//   render() {
//     return (
//       <View style = {{flex:1, alignItems: 'center', justifyContent: 'center'}}>
//         <Button
//           title = "Back to Home"
//           onPress = {this._goHome}/>
//       </View>
//     )
//   }
