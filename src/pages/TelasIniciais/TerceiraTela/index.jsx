import React, { Component } from 'react';
import {
  StatusBar, Text, View, Image, StyleSheet,
} from 'react-native';
import Estilizacao from '../../../assets/styles/global';
import EstilizacaoPadraoInicial from '../styles/stylesDefault';

export default class TerceiraTelaApresentação extends Component {
  render() {
    return (

      <View style={Estilizacao.container}>
        <StatusBar style="auto" />
        <View style={Estilizacao.headerFooter} />
        <View style={Estilizacao.body}>

          <Image
            style={EstilizacaoPadraoInicial.imageLogo}
            source={
              require('../../assets/images/logo.png')
            }
          />

          <Text style={style.mainTitle}>Sobre Doação de Órgãos</Text>
          <Text style={style.mainText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris in consectetur ipsum. Vivamus ligula odio, egestas vitae hendrerit et, placerat in leo.
            Donec vulputate lacinia mauris, quis rutrum risus sagittis eget.
          </Text>

          <Image
            style={style.mainImage}
            source={
              require('../../assets/images/coracaoMao.png')
            }
          />

        </View>
        <View style={Estilizacao.headerFooter} />
      </View>
    );
  }
}
const style = StyleSheet.create({
  mainTitle: {
    fontSize: 20,
    paddingBottom: 50,
    paddingTop: 60,
  },
  mainText: {
    fontSize: 13,
    paddingBottom: 50,
  },
  mainImage: {
    height: 200,
    width: 300,
    marginBottom: 300,
    justifyContent: 'space-between',
  },

});
