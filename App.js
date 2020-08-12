import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import React from 'react';
// Import src components
import Tela2m from './src/pages/TelasMensagens/UltimaTela';
import Header from './src/components/Header';
import Routes from './src/routes';
import Footer from './src/components/Footer';

export default function App() {
  return (
    <View style={{ height: '100%' }}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Header />
      <Routes />
      <Footer />
    </View>
  );
}
