/**
 * React Native Demo by ninghao.net
 * https://github.com/ninghao/NinghaoReactNative
 */
'use strict';

import React from 'react-native';
import styles from './app/Styles/Main';
import DatePickerIOSDemo from './app/Components/DatePickerIOSDemo';
import ModalDemo from './app/Components/ModalDemo';
import PickerIOSDemo from './app/Components/PickerIOSDemo';
import ProgressViewIOSDemo from './app/Components/ProgressViewIOSDemo';
import SegmentedControlIOSDemo from './app/Components/SegmentedControlIOSDemo';
import SliderIOSDemo from './app/Components/SliderIOSDemo';
import SwitchDemo from './app/Components/SwitchDemo';

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
      <View style={[styles.container, {padding: 30, paddingTop: 60,}]}>
        {
          <Text>React Native Demo by ninghao.net ：）</Text>

          // <DatePickerIOSDemo />
          // <ModalDemo />
          // <PickerIOSDemo />
          // <ProgressViewIOSDemo />
          // <SegmentedControlIOSDemo />
          // <SliderIOSDemo />
          // <SwitchDemo />
        }
      </View>
    );
  }
}

AppRegistry.registerComponent('NinghaoReactNative', () => NinghaoReactNative);
