import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import Pages
import UltimaTela from './pages/TelasIniciais/UltimaTela';
import Login from './pages/Login';

const AppStack = createStackNavigator();

export default class Routes extends Component {
  render() {
    return (
      <NavigationContainer>
        <AppStack.Navigator
          headerMode="none"
        >
          <AppStack.Screen name="UltimaTela" component={UltimaTela} />
          <AppStack.Screen name="Login" component={Login} />
        </AppStack.Navigator>
      </NavigationContainer>
    );
  }
}
