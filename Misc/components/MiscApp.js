import React, { Component, PropTypes } from 'react';
import{ Navigator, Text } from 'react-native'
import Menu from './Menu';
import MyScene from './MyScene';
import MyCamera from './MyCamera';

export default class App extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ name: 'menu' }}
        renderScene={this.renderScene}
      />
    );
  }

  renderScene(route, navigator) {
    if (route.name === 'menu') {
      return <Menu navigator={navigator} />
    }

    if (route.name === 'MyScene') {
      return <MyScene />
    }

    if (route.name === 'MyCamera') {
      return <MyCamera />
    }

    return <Text>unknown page</Text>
  }
}
