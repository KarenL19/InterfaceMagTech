import { StatusBar } from 'expo-status-bar';
import {
  View, TouchableOpacity, Text, StyleSheet,
} from 'react-native';
import React, { useRef } from 'react';
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
