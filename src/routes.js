import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import Pages
import UltimaTela from './pages/TelasIniciais/UltimaTela';

const AppStack = createStackNavigator();

export default class Routes extends Component {
  render() {
    return (
      <NavigationContainer>
        <AppStack.Navigator
          headerMode="none"
        >
          <AppStack.Screen name="UltimaTela" component={UltimaTela} />
        </AppStack.Navigator>
      </NavigationContainer>
    );
  }
}
