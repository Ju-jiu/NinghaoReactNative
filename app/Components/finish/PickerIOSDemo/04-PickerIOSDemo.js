'use strict';

import React from 'react-native';

let {
  Text,
  View,
  PickerIOS,
} = React;

let COURSE_CATEGORY = {
  tool: {
    name: '工具',
    subjects: ['基本工具', '前端工具'],
  },
  language: {
    name: '语言',
    subjects: ['HTML', 'CSS', 'JavaScript', 'PHP', 'SQL'],
  },
  app: {
    name: '应用',
    subjects: ['Node.js', 'React', 'Laravel', 'WordPress', 'Drupal'],
  },
};

let PickerItemIOS = PickerIOS.Item;

class PickerIOSDemo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      category: 'js'
    }
  }

  render() {
    return (
      <View>
        <PickerIOS
          selectedValue={this.state.category}
          onValueChange={(category) => this.setState({category})}
        >
          {Object.keys(COURSE_CATEGORY).map((category) => (
            <PickerItemIOS
              key={category}
              value={category}
              label={COURSE_CATEGORY[category].name}
            />
          ))}
        </PickerIOS>
      </View>
    );
  }
}

export { PickerIOSDemo as default };
