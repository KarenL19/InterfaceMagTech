import {
    StatusBar, Text, View, Image, StyleSheet,
  } from 'react-native';
  import React, { Component } from 'react';
  import Estilizacao from '../../../styles/stylesDefault';

  import { Text, View, Image } from 'react-native';
import React, { Component } from 'react';
import EstilizacaoPadrao from '../../../styles/stylesDefault';
import EstilizacaoDiferenciada from '../../../styles/stylesDifferent';
import CabecalhoConfig from '../../../components/HeaderWithIconsCG'

export default class PrimeiraTela extends Component {
  render() {
    return (
      <CabecalhoConfig/>
      <Text style={style.mainTitle}>CONFIGURAÇÕES GERAIS</Text>
    );
  }
}

const style = StyleSheet.create({
    mainTitle:{
        fontSize: 20,
        fontStyle: 'normal',
        position: 'relative',
        bottom: '7%'
    }
});