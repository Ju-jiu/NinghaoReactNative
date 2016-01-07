'use strict';

import React from 'react-native';

let {
  Text,
  View,
  DatePickerIOS,
} = React;

class DatePickerIOSDemo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>DatePickerIOS</Text>
      </View>
    );
  }
}

export { DatePickerIOSDemo as default };
