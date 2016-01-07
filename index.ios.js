/**
 * Ninghao.net
 * https://github.com/ninghao/NinghaoReactNative
 */
'use strict';

import React from 'react-native';
import styles from './app/Styles/Main';
import DatePickerIOSDemo from './app/Components/DatePickerIOSDemo';
import ModalDemo from './app/Components/ModalDemo';

var {
  AppRegistry,
  Text,
  View,
} = React;

class NinghaoReactNative extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[styles.container, {
          padding: 30,
          paddingTop: 60,
      }]}>
        <ModalDemo />
      </View>
    );
  }
}

AppRegistry.registerComponent('NinghaoReactNative', () => NinghaoReactNative);
