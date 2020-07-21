import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Tela1 from './src/pages/telasIniciais/primeiraTela/primeiraTela';
import Tela2 from './src/pages/telasIniciais/segundaTela/segundaTela';
import DetalheScroll from './src/styles/stylesDefault'
import ScrollView from 'react-native';


export default function App() {
  return (
    <>
    <ScrollView> 
      <StatusBar style="auto" />
      <Tela1 />
      <Tela2 />
    </ ScrollView>
      
    </>

  );
}
