import React from 'react';
import Tela1 from './src/pages/TelasIniciais/PrimeiraTela/primeiraTela.jsx';
import Tela2 from './src/pages/telasIniciais/segundaTela/segundaTela';
import DetalheScroll from './src/styles/stylesDefault'
import {ScrollView} from 'react-native';



export default function App() {
  return (
    
    
      <ScrollView horizontal = {true}> 
      
      <StatusBar style="auto" />
      <Tela1 />
      <Tela2 />
      
    </ScrollView>
    
    
      
    

  );
}
