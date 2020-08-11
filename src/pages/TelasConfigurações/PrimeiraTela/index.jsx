import {
    StatusBar, Text, View, Image, StyleSheet,
  } from 'react-native';
  import React, { Component } from 'react';
  import Estilizacao from '../../../styles/stylesDefault';

  import { Text, View, Image } from 'react-native';
import React, { Component } from 'react';
import EstilizacaoPadrao from '../../../styles/stylesDefault';
import EstilizacaoDiferenciada from '../../../styles/stylesDifferent';

export default class PrimeiraTela extends Component {
  render() {
    return (
      <View style={EstilizacaoPadrao.container}>

        <View style={EstilizacaoPadrao.headerFooter} />

        <View style={EstilizacaoPadrao.body}>

          <Text style={
            style.mainTitle
          }
          >
            COFIGURAÇÕES GERAIS
          </Text>

        </View>

        <View style={EstilizacaoPadrao.headerFooter}>
          <View style={{ flexDirection: 'row' }}>
            <Image
              style={EstilizacaoDiferenciada.imageLupa}
              source={
                        require('../../assets/pesquisa2.png')
                        }
            />
          </View>
        </View>

      </View>
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