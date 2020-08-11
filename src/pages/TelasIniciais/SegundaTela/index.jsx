import React, { Component } from 'react';
import {
  Text, View, Image, StyleSheet,
} from 'react-native';
import EstilizacaoPadrao from '../../../styles/stylesDefault';
import EstilizacaoPadraoInicial from '../styles/stylesDefault';

export default class SegundaTela extends Component {
  render() {
    return (
      <View style={EstilizacaoPadrao.container}>
        <View style={EstilizacaoPadrao.headerFooter} />
        <View style={EstilizacaoPadrao.body}>
          <Image
            style={EstilizacaoPadraoInicial.imageLogo}
            source={
            require('../../../assets/logo.png')
          }
          />
          <Text style={{ fontSize: 20, paddingTop: 10 }}>
            Por que você deveria se tornar
          </Text>
          <Text style={{ fontSize: 20, paddingTop: 3 }}>
            um doador de órgãos?!
          </Text>
          <Image
            style={style.imageFlor}
            source={
            require('../../../assets/flor.png')
          }
          />
          <Image
            style={style.imagePontosInterrog}
            source={
            require('../../../assets/pontoInterrog.png')
          }
          />

        </View>
        <View style={EstilizacaoPadrao.headerFooter} />
      </View>
    );
  }
}
const style = StyleSheet.create({
  imageFlor: {
    height: 80,
    width: 80,
    position: 'relative',
    top: '43%',
    left: '37%',
  },
  imagePontosInterrog: {
    height: 270,
    width: 250,
    bottom: '10%',

  },
});
