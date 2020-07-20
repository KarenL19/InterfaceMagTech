import { StatusBar } from 'expo-status-bar';
import React from 'react';

// Import src components
import { View } from 'react-native';
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
