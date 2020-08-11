import React, { Component } from 'react';
import {
  StatusBar, Text, View, Image, StyleSheet,
} from 'react-native';
import EstilizacaoPadrao from '../../../styles/stylesDefault';
import EstilizacaoPadraoInicial from '../styles/stylesDefault';

export default class QuintaTelaApresentacao extends Component {
  render() {
    return (

      <View style={EstilizacaoPadrao.container}>
        <StatusBar style="auto" />
        <View style={EstilizacaoPadrao.headerFooter} />
        <View style={EstilizacaoPadrao.body}>

          <Image
            style={EstilizacaoPadraoInicial.imageLogo}
            source={
            require('../../assets/log_3.png')
          }
          />

          <Text style={{ fontSize: 20, paddingBottom: 30 }}>Sobre Doação de Órgãos</Text>

          <Image
            style={Estilizacao.image}
            source={
            require('../../assets/quintaTela.png')
          }
          />

          <Text style={{ fontSize: 13, marginBottom: 90 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris in consectetur ipsum. Vivamus ligula odio, egestas vitae hendrerit et, placerat in leo.
            Donec vulputate lacinia mauris, quis rutrum risus sagittis eget.
          </Text>

        </View>
        <View style={EstilizacaoPadrao.headerFooter} />
      </View>
    );
  }
}
