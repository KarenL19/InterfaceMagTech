import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import React from 'react';
// Import src components
import Routes from './src/routes';
import Modal from './src/components/Modal'
import TelaConf from './src/pages/TelasConfigurações/PrimeiraTela'
import TelaMsg from './src/pages/TelasMensagens/PrimeiraTela'
import PrimeiraTela from './src/pages/TelasConfigurações/PrimeiraTela';

export default function App() {
  return (
    <View style={{ height: '100%' }}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <PrimeiraTela/>
      {/*
      <Routes />
      
      */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9b59b6',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: '#fff',
    fontSize: 22
  },
  button: {
    height: 50,
    borderRadius: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    marginTop: 20
  }
})


