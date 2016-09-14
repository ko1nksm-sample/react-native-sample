import React, { Component, PropTypes } from 'react';
import{ AppRegistry, StyleSheet, ScrollView, Text, View, TouchableHighlight, Alert } from 'react-native'

const styles = StyleSheet.create({
  text: {
    fontSize: 32,
    margin: 10,
  },

});

export default class Menu extends Component {
  alert(msg) {
    Alert.alert('Alert Title', msg);
  }

  goto(name) {
    this.props.navigator.push({name});
  }

  render() {
    return (
      <ScrollView>
        <TouchableHighlight style={styles.highlight} onPress={() => this.alert("test")} underlayColor="pink">
          <Text style={styles.text}>Alert</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.highlight} onPress={() => this.goto("MyScene")} underlayColor="pink">
          <Text style={styles.text}>MyScene</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.highlight} onPress={() => this.goto("MyCamera")} underlayColor="pink">
          <Text style={styles.text}>MyCamera</Text>
        </TouchableHighlight>
        <Text style={styles.text}>page 03</Text>
        <Text style={styles.text}>page 04</Text>
        <Text style={styles.text}>page 05</Text>
        <Text style={styles.text}>page 06</Text>
        <Text style={styles.text}>page 07</Text>
        <Text style={styles.text}>page 08</Text>
        <Text style={styles.text}>page 09</Text>
        <Text style={styles.text}>page 10</Text>
      </ScrollView>
    )
  }
}
