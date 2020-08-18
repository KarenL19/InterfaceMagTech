import {
  StatusBar, Text, View, Image,
} from 'react-native';
import React, { Component } from 'react';
// import Estilizacao from '../../../assets/styles/global';
import EstilizacaoMensagem from '../PrimeiraTela/styles';

export default class PrimeiraTelaMensagem extends Component {
  render() {
    return (

      <View style={EstilizacaoMensagem.container}>
        <StatusBar style="auto" />
        <View style={[EstilizacaoMensagem.headerFooter, EstilizacaoMensagem.headerComIcones]}>
          <Image
            style={EstilizacaoMensagem.imagemPerfilIcone}
            source={
              require('../../../assets/icons/fotoPerfil.png')
            }
          />
          <Text style={EstilizacaoMensagem.tituloMensagensHeader}>Mensagens</Text>
          <View style={EstilizacaoMensagem.backgroundIcone}>
            <Image
              style={EstilizacaoMensagem.imagemSinoIcone}
              source={
              require('../../../assets/icons/sino.png')
            }
            />
          </View>
          <View style={EstilizacaoMensagem.backgroundIcone}>
            <Image
              style={EstilizacaoMensagem.imagemAviaoIcone}
              source={
              require('../../../assets/icons/IconeMensagem.png')
            }
            />
          </View>
        </View>
        <View style={EstilizacaoMensagem.body} />
        <View style={EstilizacaoMensagem.headerFooter}>
          <View style={EstilizacaoMensagem.footerComIcones}>
            <View style={EstilizacaoMensagem.backgroundIcone}>
              <Image
                style={EstilizacaoMensagem.imagemSinoIcone}
                source={
              require('../../../assets/icons/lupaPesquisa.png')
            }
              />
            </View>
            <View style={EstilizacaoMensagem.backgroundIcone}>
              <Image
                style={EstilizacaoMensagem.imagemMagtechIcone}
                source={
              require('../../../assets/icons/iconeFeed.png')
            }
              />
            </View>
            <View style={EstilizacaoMensagem.backgroundIcone}>
              <Image
                style={EstilizacaoMensagem.imagemSinoIcone}
                source={
              require('../../../assets/icons/iconePostagem.png')
            }
              />
            </View>
            <View style={EstilizacaoMensagem.backgroundIcone}>
              <Image
                style={EstilizacaoMensagem.imagemAviaoIcone}
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
