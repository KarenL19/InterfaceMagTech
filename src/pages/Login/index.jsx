import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

export default class Login extends Component {
  render() {
    return (
      <Text style={styles.title}>Testando o login</Text>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
  },
});
