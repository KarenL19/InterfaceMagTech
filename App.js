import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import React from 'react';
// Import src components
import Routes from './src/routes';

export default function App() {
  return (
    <View style={{ height: '100%' }}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </View>
  );
}
