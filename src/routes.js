import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import Pages
import TelasIniciais from './pages/TelasIniciais';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Configuracoes from './pages/TelasConfigurações/PrimeiraTela';


const AppStack = createStackNavigator();

export default class Routes extends Component {
  render() {
    return (
      <NavigationContainer>
        <AppStack.Navigator
          headerMode="none"
        >
          <AppStack.Screen name="TelasIniciais" component={TelasIniciais} />
          <AppStack.Screen name="Login" component={Login} />
          <AppStack.Screen name="Cadastro" component={Cadastro} />
          <AppStack.Screen name="Configuracoes" component={Configuracoes} />
        </AppStack.Navigator>
      </NavigationContainer>
    );
  }
}
