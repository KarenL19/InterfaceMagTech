import {
StatusBar, Text, View, Image,
} from 'react-native';
import React, { Component } from 'react';
import EstilizacaoMensagem from './styles';


//Import Header and Footer
import Header from '../../../components/HeaderWithIconsFMM';
import Footer from '../../../components/FooterWithIcons';

//Import Images
import iconeAviao from '../../../assets/icons/IconeMensagem.png';

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
                  require('../../../assets/icons/botaoLupa.png')
                }
              />
            </View>
            <Image
              style={Estilizacao.imagemMagtechIcone}
              source={
                require('../../../assets/icons/botaoFeed.png')
              }
            />
          </View>
          <View style={Estilizacao.backgroundIcone}>
            <Image
              style={Estilizacao.imagemSinoIcone}
              source={
                require('../../../assets/icons/botaoPostagem.png')
              }
            />
          </View>
          <Image
            style={Estilizacao.imagemAviaoIcone}
            source={
              require('../../../assets/icons/botaoMenu.png')
            }
          />
        </View>
      </View>

<View style={EstilizacaoMensagem.container}>
  <StatusBar style="auto" />
  <Header/>
  <View style={EstilizacaoMensagem.body}>
    <View style={EstilizacaoMensagem.campoDePesquisa}>
    <View style={EstilizacaoMensagem.backgroundHeaderIcone}>
    <Image
      style={EstilizacaoMensagem.imagemAviaoIcone}
      source={iconeAviao}
      />
     </View> 
    <View style={EstilizacaoMensagem.viewGeralContatos}>
      <View style={EstilizacaoMensagem.viewContatoUnitario}>
      </View>  
    </View>    
    </View>  
  </View>
  <Footer/>  
</View>
);
}
}
