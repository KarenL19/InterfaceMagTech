import React, { Component } from 'react';
import {
  StatusBar, Text, View, Image,
} from 'react-native';
import Estilizacao from '../../../styles/stylesDefault';

export default class TerceiraTelaApresentação extends Component {
  render() {
    return (

      <View style={Estilizacao.container}>
        <StatusBar style="auto" />
        <View style={Estilizacao.headerFooter} />
        <View style={Estilizacao.body}>

          <Image
            style={Estilizacao.image}
            source={
              require('../../assets/log_3.png')
            }
          />

          <Text style={Estilizacao.tituloTerceiraTelaApresentacao}>Sobre Doação de Órgãos</Text>
          <Text style={Estilizacao.textoTerceiraTelaApresentacao}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris in consectetur ipsum. Vivamus ligula odio, egestas vitae hendrerit et, placerat in leo.
            Donec vulputate lacinia mauris, quis rutrum risus sagittis eget.
          </Text>

          <Image
            style={Estilizacao.image2}
            source={
              require('../../assets/terceiraTela.png')
            }
          />

        </View>
        <View style={Estilizacao.headerFooter} />
      </View>
    );
  }
}
