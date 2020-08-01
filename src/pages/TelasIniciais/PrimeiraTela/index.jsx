import { Text, View, Image } from 'react-native';
import React, { Component } from './node_modules/react';
import EstilizacaoPadrao from '../../../styles/stylesDefault';
import EstilizacaoDiferenciada from '../../../styles/stylesDifferent';

export default class PrimeiraTela extends Component {
  render() {
    return (
      <View style={EstilizacaoPadrao.container}>
        <View style={EstilizacaoPadrao.headerFooter} />
        <View style={EstilizacaoPadrao.body}>
          <Image
            style={EstilizacaoDiferenciada.imageLogoPag1}
            source={
            require('../../../assets/log_3.png')
          }
          />
          <Image
            style={EstilizacaoDiferenciada.imageFlorTela1}
            source={
            require('../../../assets/flor.png')
          }
          />
          <Text style={{ fontSize: 20, position: 'relative', top: '10%' }}>
            Seja um Doador de Órgãos!!
          </Text>

        </View>
        <View style={EstilizacaoPadrao.headerFooter} />
      </View>
    );
  }
}
