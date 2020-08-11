import {
  Text, View, Image, StyleSheet,
} from 'react-native';
import React, { Component } from 'react';
import EstilizacaoPadrao from '../../../assets/styles/global';
import EstilizacaoPadraoInicial from '../styles/stylesDefault';

export default class QuartaTela extends Component {
  render() {
    return (
      <View style={EstilizacaoPadrao.container}>
        <View style={EstilizacaoPadrao.headerFooter} />
        <View style={EstilizacaoPadrao.body}>
          <Image
            style={EstilizacaoPadraoInicial.imageLogo}
            source={
                        require('../../../assets/images/logo.png')
                         }
          />
          <Text style={{ fontSize: 20, paddingTop: 10 }}>
            Alguns dados
          </Text>
          <Image
            style={style.imageFlor}
            source={
                        require('../../../assets/images/flor.png')
                        }
          />
          <Image
            style={style.imageBarras}
            source={
                        require('../../../assets/images/graficoBarras.png')
                        }
          />
          <Text style={{ fontSize: 15, bottom: '20%' }}>
            Lorem Ipsum is simply dummy text of the
          </Text>
          <Text style={{ fontSize: 15, bottom: '19%' }}>
            printing and typesetting industry.
          </Text>

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
    top: '48%',
    left: '38%',

  },
  imageBarras: {
    height: 200,
    width: 300,
    bottom: '17%',

  },

});
