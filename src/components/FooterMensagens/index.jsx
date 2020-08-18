import {
    StatusBar, Text, View, Image,
  } from 'react-native';
  import React, { Component } from 'react';
  import Estilizacao from '../../../assets/styles/global';

  export default class PrimeiraTelaMensagem extends Component {
    render() {
      return (
        <View style={Estilizacao.container}>
            <View style={Estilizacao.body} />
        <View style={Estilizacao.headerFooter}>
          <View style={Estilizacao.footerComIcones}>
            <View style={Estilizacao.backgroundIcone}>
              <Image
                style={Estilizacao.imagemSinoIcone}
                source={
              require('../../../assets/icons/lupaPesquisa.png')
            }
              />
            </View>
            <View style={Estilizacao.backgroundIcone}>
              <Image
                style={Estilizacao.imagemMagtechIcone}
                source={
              require('../../../assets/icons/iconeFeed.png')
            }
              />
            </View>
            <View style={Estilizacao.backgroundIcone}>
              <Image
                style={Estilizacao.imagemSinoIcone}
                source={
              require('../../../assets/icons/iconePostagem.png')
            }
              />
            </View>
            <View style={Estilizacao.backgroundIcone}>
              <Image
                style={Estilizacao.imagemAviaoIcone}
                source={
              require('../../../assets/icons/iconeMenu.png')
            }
              />
            </View>
          </View>
        </View>
      </View> 
        );
    }
}