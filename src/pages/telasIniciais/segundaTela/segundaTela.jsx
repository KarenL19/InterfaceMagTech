import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import Estilizacao from '../../../styles/stylesDefault';

export default class SegundaTela extends Component {
    render() {
        return(
            <View style={Estilizacao.container}>
        <View style={Estilizacao.headerFooter} />
        <View style={Estilizacao.body}>
          <Image
            style={Estilizacao.image2}
            source={
            require('../../../assets/log_3.png')
          }
          />
          <Text style={{ fontSize: 20, paddingBottom: 300}}>
              Por que você deveria se tornar</Text>
            <Text style={{ fontSize: 20, paddingBottom:300}}>
              um doador de órgãos?!</Text>
        </View>
        <View style={Estilizacao.headerFooter} />
      </View>
        )
    }

}