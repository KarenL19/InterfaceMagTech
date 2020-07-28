import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, View, Image} from 'react-native';
import Estilizacao from './src/styles/stylesDefault'
import TerceiraTelaApresentacao from './src/pages/telasIniciais/TerceiraTelaApresentacao';
import QuintaTelaApresentacao from './src/pages/telasIniciais/QuintaTelaApresentacao';
import PrimeiraTelaMensagem from './src/pages/telasMensagens/PrimeiraTelaMensagem';
export default function App() {
  return (
    <>
      <PrimeiraTelaMensagem/>
    </>
  );
}

