import {
  StatusBar, Text, View, Image,
} from 'react-native';
import React, { Component } from 'react';
import Estilizacao from '../../../assets/styles/global';

export default class PrimeiraTelaMensagem extends Component {
  render() {
    return (

      <View style={Estilizacao.container}>
        <StatusBar style="auto" />
        <View style={[Estilizacao.headerFooter, Estilizacao.headerComIcones]}>
          <Image
            style={Estilizacao.imagemPerfilIcone}
            source={
              require('../../../assets/icons/fotoPerfil.png')
            }
          />
          <Text style={Estilizacao.tituloMensagensHeader}>Mensagens</Text>
          <View style={Estilizacao.backgroundIcone}>
            <Image
              style={Estilizacao.imagemSinoIcone}
              source={
                require('../../../assets/icons/sino.png')
              }
            />
          </View>
          <View style={Estilizacao.backgroundIcone}>
            <Image
              style={Estilizacao.imagemAviaoIcone}
              source={
                require('../../../assets/icons/IconeMensagem.png')
              }
            />
          </View>
        </View>
        <View style={Estilizacao.body} />
        <View style={Estilizacao.headerFooter}>
          <View style={Estilizacao.footerComIcones}>
            <View style={Estilizacao.backgroundIcone}>
              <Image
                style={Estilizacao.imagemSinoIcone}
                source={
<<<<<<< HEAD
              require('../../../assets/icons/lupaPesquisa.png')
            }
=======
                  require('../../../assets/icons/botaoLupa.png')
                }
>>>>>>> 02221e80f4a22ab664a160ffd29b5a129534f56a
              />
            </View>
            <Image
              style={Estilizacao.imagemMagtechIcone}
              source={
<<<<<<< HEAD
              require('../../../assets/icons/iconeFeed.png')
            }
=======
                require('../../../assets/icons/botaoFeed.png')
              }
>>>>>>> 02221e80f4a22ab664a160ffd29b5a129534f56a
            />
          </View>
          <View style={Estilizacao.backgroundIcone}>
            <Image
              style={Estilizacao.imagemSinoIcone}
              source={
<<<<<<< HEAD
              require('../../../assets/icons/iconePostagem.png')
            }
=======
                require('../../../assets/icons/botaoPostagem.png')
              }
>>>>>>> 02221e80f4a22ab664a160ffd29b5a129534f56a
            />
          </View>
          <Image
            style={Estilizacao.imagemAviaoIcone}
            source={
<<<<<<< HEAD
              require('../../../assets/icons/iconeMenu.png')
=======
              require('../../../assets/icons/botaoMenu.png')
>>>>>>> 02221e80f4a22ab664a160ffd29b5a129534f56a
            }
          />
        </View>
      </View>

    );
  }
}
