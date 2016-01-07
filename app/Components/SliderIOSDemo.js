'use strict';

import React from 'react-native';

let {
  Text,
  View,
} = React;

class SliderIOSDemo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sliderValue: 0,
    }
  }

  render() {
    return (
      <View>
        <Text>SliderIOS</Text>
      </View>
    );
  }
}

export { SliderIOSDemo as default };
