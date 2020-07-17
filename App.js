import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, View, Image} from 'react-native';
import Estilizacao from './src/styles/stylesDefault'

export default function App() {
  return (
    <View style={Estilizacao.container}>
      <StatusBar style="auto" />
      <View style={Estilizacao.headerFooter}>
      </View>
      <View style={Estilizacao.body}>
        <Image style={Estilizacao.image} 
        source={          
          require("./src/assets/log_3.png")
        } 
        />
        <Text style={{fontSize:20,paddingBottom:120}}>Seja um Doador de Órgãos!!</Text>
      </View>
      <View style={Estilizacao.headerFooter}>
      </View>
    </View>
  );
}


