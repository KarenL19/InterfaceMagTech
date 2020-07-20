import React, { Component } from 'react';
import {
  View, Text, StyleSheet, Image,
} from 'react-native';

export default class UltimaTela extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Nossa Rede Social</Text>
        <Text>Venha conhecer a nossa rede</Text>
        <Image
          source={require('../../../assets/celular.png')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 22,
  },
});
