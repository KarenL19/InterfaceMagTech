import React, { Component } from 'react';
import { Text, View, Image,Dimensions } from 'react-native';
import EstilizacaoPadrao from '../../../styles/stylesDefault';
import EstilizacaoDiferenciada from '../../../styles/stylesDifferent'

export default class SegundaTela extends Component {
    render() {
        return(
            <View style={EstilizacaoPadrao.container}>
        <View style={EstilizacaoPadrao.headerFooter} />
        <View style={EstilizacaoPadrao.body}>
          <Image
            style={EstilizacaoDiferenciada.imageLogoPag23456}
            source={
            require('../../../assets/log_3.png')
          }
          />
          <Text style={{ fontSize: 20, paddingTop: 10}}>
              Por que você deveria se tornar</Text>
            <Text style={{ fontSize: 20, paddingTop:3, }}>
              um doador de órgãos?!</Text>
              <Image
            style={EstilizacaoDiferenciada.imageFlorTela2}
            source={
            require('../../../assets/flor.png')
          }
          />
              <Image
            style={EstilizacaoDiferenciada.imagePontosInterrog}
            source={
            require('../../../assets/pontoInterrog.png')
          }
          />  
              
                      
        </View>
        <View style={EstilizacaoPadrao.headerFooter} />
      </View>
        )
    }

}