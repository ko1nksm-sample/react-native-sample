import React from 'react'
import { StyleSheet, Text } from 'react-native';

export default React.createClass({
  render() {
    const styles = StyleSheet.create({
      text: {
        fontSize: 32,
        textAlign: 'center',
        margin: 10,
      },
    });

    return (
      <Text style={styles.text}>Hello world!</Text>
    )
  }
});
