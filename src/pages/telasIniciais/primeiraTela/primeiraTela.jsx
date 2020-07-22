import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import Estilizacao from '../../../styles/stylesDefault';

export default class PrimeiraTela extends Component {
  render() {
    return (
      <View style={Estilizacao.container}>
        <View style={Estilizacao.headerFooter} />
        <View style={Estilizacao.body}>
          <Image
            style={Estilizacao.image}
            source={
            require('../../../assets/log_3.png')
          }
          />
          <Text style={{ fontSize: 20, paddingBottom: 120 }}>Seja um Doador de Órgãos!!</Text>
        </View>
        <View style={Estilizacao.headerFooter} />
      </View>
    );
  }
}
