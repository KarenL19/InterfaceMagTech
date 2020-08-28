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
