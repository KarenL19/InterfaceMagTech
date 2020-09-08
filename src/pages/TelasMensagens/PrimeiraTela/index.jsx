import {
StatusBar, Text, View, Image,
} from 'react-native';
import React, { Component } from 'react';
import EstilizacaoMensagem from './styles';
import { ScrollView, TextInput } from 'react-native-gesture-handler';


//Import Components
import Header from '../../../components/HeaderWithIconsFMM';
import Footer from '../../../components/FooterWithIcons';

//Import Images
import iconeAviao from '../../../assets/icons/IconeMensagem.png';
import fotoPerfil from '../../../assets/icons/fotoPerfil.png';
import iconeFiltro from '../../../assets/icons/iconeFiltro.png';

export default class PrimeiraTelaMensagem extends Component {
render() {
return (
<View style={EstilizacaoMensagem.container}>
<StatusBar style="auto" />
<Header/>
<View style={EstilizacaoMensagem.body}>
  <View style={EstilizacaoMensagem.campoDePesquisa}>
    
  <View style={[EstilizacaoMensagem.campoDeBusca]}>
    <TextInput
    placeholder="  Buscar"
    placeholderTextColor="grey"
    style={{ 
    height: 30,
    width: 250,  
    borderColor: 'grey', 
    borderWidth: 1, 
    borderRadius: 30, 
    marginTop: 100,
    marginLeft: 10,
    }} 
    />  
    </View> 

  <View style={EstilizacaoMensagem.backgroundHeaderIcone}>
    <Image
    style={EstilizacaoMensagem.imagemAviaoIcone}
    source={iconeAviao}
    />
   </View>

   <View style={EstilizacaoMensagem.backgroundHeaderIconeFiltro}>
   <Image
     style={EstilizacaoMensagem.imagemFiltroIcone}
     source={iconeFiltro} 
    />
   </View>   
  
  <View style={EstilizacaoMensagem.viewGeralContatos}>
    <ScrollView >
    <View style={EstilizacaoMensagem.viewContatoUnitario}>
    <Image
    style={EstilizacaoMensagem.imagemPerfilIcone}
    source={fotoPerfil}
  /> 
    <Text style={EstilizacaoMensagem.nomeUsuario}>
      Nome do usuário 
    </Text>  
    <Text style={EstilizacaoMensagem.mensagemUsuario}>
      Olá, tudo bem? {"\n"} 
      Aqui é só um texto teste! {"\n"}
      Obrigado! 
    </Text> 
    </View>  

    <View style={EstilizacaoMensagem.viewContatoUnitario}>
    <Image
    style={EstilizacaoMensagem.imagemPerfilIcone}
    source={fotoPerfil}
  /> 
    <Text style={EstilizacaoMensagem.nomeUsuario}>
      Nome do usuário 
    </Text>  
    <Text style={EstilizacaoMensagem.mensagemUsuario}>
      Olá, tudo bem? {"\n"} 
      Aqui é só um texto teste! {"\n"}
      Obrigado! 
    </Text> 
    </View>

    <View style={EstilizacaoMensagem.viewContatoUnitario}>
    <Image
    style={EstilizacaoMensagem.imagemPerfilIcone}
    source={fotoPerfil}
  /> 
    <Text style={EstilizacaoMensagem.nomeUsuario}>
      Nome do usuário 
    </Text>  
    <Text style={EstilizacaoMensagem.mensagemUsuario}>
      Olá, tudo bem? {"\n"} 
      Aqui é só um texto teste! {"\n"}
      Obrigado! 
    </Text> 
    </View>

    <View style={EstilizacaoMensagem.viewContatoUnitario}>
    <Image
    style={EstilizacaoMensagem.imagemPerfilIcone}
    source={fotoPerfil}
  /> 
    <Text style={EstilizacaoMensagem.nomeUsuario}>
      Nome do usuário 
    </Text>  
    <Text style={EstilizacaoMensagem.mensagemUsuario}>
      Olá, tudo bem? {"\n"} 
      Aqui é só um texto teste! {"\n"}
      Obrigado! 
    </Text> 
    </View>

    <View style={EstilizacaoMensagem.viewContatoUnitario}>
    <Image
    style={EstilizacaoMensagem.imagemPerfilIcone}
    source={fotoPerfil}
  /> 
    <Text style={EstilizacaoMensagem.nomeUsuario}>
      Nome do usuário 
    </Text>  
    <Text style={EstilizacaoMensagem.mensagemUsuario}>
      Olá, tudo bem? {"\n"} 
      Aqui é só um texto teste! {"\n"}
      Obrigado! 
    </Text> 
    </View>

    <View style={EstilizacaoMensagem.viewContatoUnitario}>
    <Image
    style={EstilizacaoMensagem.imagemPerfilIcone}
    source={fotoPerfil}
  /> 
    <Text style={EstilizacaoMensagem.nomeUsuario}>
      Nome do usuário 
    </Text>  
    <Text style={EstilizacaoMensagem.mensagemUsuario}>
      Olá, tudo bem? {"\n"} 
      Aqui é só um texto teste! {"\n"}
      Obrigado! 
    </Text> 
    </View>

    <View style={EstilizacaoMensagem.viewContatoUnitario}>
    <Image
    style={EstilizacaoMensagem.imagemPerfilIcone}
    source={fotoPerfil}
  /> 
    <Text style={EstilizacaoMensagem.nomeUsuario}>
      Nome do usuário 
    </Text>  
    <Text style={EstilizacaoMensagem.mensagemUsuario}>
      Olá, tudo bem? {"\n"} 
      Aqui é só um texto teste! {"\n"}
      Obrigado! 
    </Text> 
    </View>

    <View style={EstilizacaoMensagem.viewContatoUnitario}>
    <Image
    style={EstilizacaoMensagem.imagemPerfilIcone}
    source={fotoPerfil}
  /> 
    <Text style={EstilizacaoMensagem.nomeUsuario}>
      Nome do usuário 
    </Text>  
    <Text style={EstilizacaoMensagem.mensagemUsuario}>
      Olá, tudo bem? {"\n"} 
      Aqui é só um texto teste! {"\n"}
      Obrigado! 
    </Text> 
    </View>

    <View style={EstilizacaoMensagem.viewContatoUnitario}>
    <Image
    style={EstilizacaoMensagem.imagemPerfilIcone}
    source={fotoPerfil}
  /> 
    <Text style={EstilizacaoMensagem.nomeUsuario}>
      Nome do usuário 
    </Text>  
    <Text style={EstilizacaoMensagem.mensagemUsuario}>
      Olá, tudo bem? {"\n"} 
      Aqui é só um texto teste! {"\n"}
      Obrigado! 
    </Text> 
    </View>

    <View style={EstilizacaoMensagem.viewContatoUnitario}>
    <Image
    style={EstilizacaoMensagem.imagemPerfilIcone}
    source={fotoPerfil}
  /> 
    <Text style={EstilizacaoMensagem.nomeUsuario}>
      Nome do usuário 
    </Text>  
    <Text style={EstilizacaoMensagem.mensagemUsuario}>
      Olá, tudo bem? {"\n"} 
      Aqui é só um texto teste! {"\n"}
      Obrigado! 
    </Text> 
    </View>
   
</ScrollView>
  </View>    
  </View>  
</View>
<Footer/>  
</View>
)}};