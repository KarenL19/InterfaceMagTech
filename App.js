import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Tela1 from './src/pages/telasIniciais/primeiraTela/primeiraTela';
import Tela2 from './src/pages/telasIniciais/segundaTela/segundaTela';
import Tela4 from './src/pages/telasIniciais/quartaTela/quartaTela';
import Tela2m from './src/pages/telasMensagem/ultimaTela'
import DetalheScroll from './src/styles/stylesDefault';
import {View} from 'react-native';



export default function App() {
  return (
    
    
    <View> 
    
    <StatusBar style="auto" />
    
    <Tela2m/>

    
  </View>
    
    
      
    

  );
}
