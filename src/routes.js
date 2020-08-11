import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import Pages
import PrimeiraTela from './pages/TelasIniciais/PrimeiraTela';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';

const AppStack = createStackNavigator();

export default class Routes extends Component {
  render() {
    return (
      <NavigationContainer>
        <AppStack.Navigator
          headerMode="none"
        >
          <AppStack.Screen name="PrimeiraTela" component={PrimeiraTela} />
          <AppStack.Screen name="Login" component={Login} />
          <AppStack.Screen name="Cadastro" component={Cadastro} />
        </AppStack.Navigator>
      </NavigationContainer>
    );
  }
}
