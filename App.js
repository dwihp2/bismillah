import React, {Component} from 'react';
import RootNavigator from './src/rootNavigator';
import { View, StyleSheet } from 'native-base';
import styles from './src/styles';
import navigationServices from './src/helper/navigationServices';

export default class App extends Component {
  render() {
    return (
      <RootNavigator
        ref = {navRef => navigationServices.setTopLevelNavigator(navRef)}
      />
    );
  }
}

