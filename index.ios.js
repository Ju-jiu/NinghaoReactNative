/**
 * Ninghao.net
 * https://github.com/ninghao/ninghao-react-native-demo
 */
'use strict';

import React from 'react-native';
import styles from './app/Styles/Main';

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
      </View>
    );
  }
}

AppRegistry.registerComponent('NinghaoReactNative', () => NinghaoReactNative);
