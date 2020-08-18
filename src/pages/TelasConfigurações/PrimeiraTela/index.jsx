import {
  StatusBar, Text, View, Image, StyleSheet,
} from 'react-native';
import React, { Component } from 'react';
import EstilizacaoPadrao from '../../../assets/styles/global';
import EstilizacaoDiferenciada from '../../../assets/styles/stylesDifferent';

export default class PrimeiraTela extends Component {
  render() {
    return (
      <View style={EstilizacaoPadrao.container}>

        
        <View style={EstilizacaoPadrao.headerFooter}>
          
          <View>
          <Text style={
            style.mainTitle
          }>
            COFIGURAÇÕES GERAIS
          </Text>
          </View>

        </View>

        <View style={EstilizacaoPadrao.body}>

         
      


        </View>

        <View>
          <Image
          style={style.prancheta}
            source={
              require('../../../assets/images/prancheta.png')
            }
          />
          
        </View>

        <View style={EstilizacaoPadrao.headerFooter}>
          <View style={{ flexDirection: 'row' }}>
            <Image
              style={EstilizacaoDiferenciada.imageLupa}
              source={
                require('../../../assets/icons/botaoLupa.png')
              }
            />
          </View>
          <View></View>
          <View style={{ flexDirection: 'row' }}>
            <Image
              style={EstilizacaoDiferenciada.imageLupa}
              source={
                require('../../../assets/icons/botaoFeed.png')
              }
            />
          </View>
        </View>

      </View>
    );
  }
}

const style = StyleSheet.create({
  mainTitle: {
    paddingTop: 2,
    fontSize: 20,
    fontStyle: 'normal',
    position: 'relative',
    bottom: '7%'
  },
  prancheta:{

    
    height: 550,
    width: 350
    
  }
});