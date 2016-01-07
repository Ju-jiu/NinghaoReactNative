'use strict';

import React from 'react-native';

let {
  Text,
  View,
} = React;

class SwitchDemo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>Switch</Text>
      </View>
    );
  }
}

export { SwitchDemo as default };
