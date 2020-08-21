import {
StatusBar, Text, View, Image,
} from 'react-native';
import React, { Component } from 'react';
import EstilizacaoMensagem from './styles';

//Import Header and Footer
import Header from '../../../components/HeaderWithIcons';
import Footer from '../../../components/FooterWithIcons';

export default class PrimeiraTelaMensagem extends Component {
render() {
return (

<View style={EstilizacaoMensagem.container}>
  <StatusBar style="auto" />
  <Header/>
  <View style={EstilizacaoMensagem.body}>
    <View style={EstilizacaoMensagem.campoDePesquisa}>
    
    </View>    
    <View style={EstilizacaoMensagem.viewGeralContatos}>
      <View style={EstilizacaoMensagem.viewContatoUnitario}>
      </View>  
    </View>  
  </View>
  <Footer/>  
</View>
);
}
}
