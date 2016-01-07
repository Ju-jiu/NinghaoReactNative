'use strict';

import React from 'react-native';
import styles from '../Styles/Main';

let {
  Text,
  View,
  TouchableHighlight,
} = React;

class ModalDemo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>Modal</Text>
      </View>
    );
  }
}

export { ModalDemo as default };
