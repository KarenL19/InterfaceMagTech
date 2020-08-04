import {
  Text, View, Image, StyleSheet,
} from 'react-native';
import React, { Component } from 'react';
import EstilizacaoPadrao from '../../../styles/stylesDefault';

export default class PrimeiraTela extends Component {
  render() {
    return (
      <View style={EstilizacaoPadrao.container}>
        <View style={EstilizacaoPadrao.headerFooter} />
        <View style={EstilizacaoPadrao.body}>
          <Image
            style={styles.imageLogoPag1}
            source={
            require('../../../assets/log_3.png')
          }
          />
          <Image
            style={styles.imageFlorTela1}
            source={
            require('../../../assets/flor.png')
          }
          />
          <Text style={styles.mainTitle}>
            Seja um Doador de Órgãos!!
          </Text>

        </View>
        <View style={EstilizacaoPadrao.headerFooter} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  imageLogoPag1: {
    height: 200,
    width: 400,
    position: 'relative',
    top: '20%',
  },
  imageFlorTela1: {
    height: 80,
    width: 80,
    position: 'relative',
    top: '45%',
    left: '37%',

  },
  mainTitle: {
    fontSize: 20,
    position: 'relative',
    top: '10%',
  },

});
