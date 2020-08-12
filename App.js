import { StatusBar } from 'expo-status-bar';
import { View, TouchableOpacity, Text,StyleSheet} from 'react-native';
import React, { useRef } from 'react';
import {Modalize} from 'react-native-modalize'
// Import src components
import Tela1 from './src/pages/TelasIniciais/PrimeiraTela';
import Tela2 from './src/pages/TelasIniciais/SegundaTela';
import Tela4 from './src/pages/TelasIniciais/QuartaTela';
import Tela2m from './src/pages/TelasMensagens/UltimaTela';
import DetalheScroll from './src/assets/styles/global';
import StyleModal from './src/assets/styles/testeModal';
import Header from './src/components/Header';
import Routes from './src/routes';
import Footer from './src/components/Footer';
import Modal from './src/components/Modal'
import Login from './src/pages/Login'

export default function App() {
  return (
    <View style={{ height: '100%' }}>

    <StatusBar
      barStyle="dark-content"
      backgroundColor="transparent"
      translucent
    />
  
      <Modal/>
      
      {/*<Tela2></Tela2>
      <Header />
      <Routes />
      <Footer />
      <StatusBar
      barStyle="dark-content"
      backgroundColor="transparent"
      translucent
      />
      */}
    </View>
  );
}


const style = StyleSheet.create({
  modal:{
    fontSize:45
  }
})