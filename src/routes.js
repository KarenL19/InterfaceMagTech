import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import Pages
import TelasIniciais from './pages/TelasIniciais';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Feed from './pages/Feed';
import TelasMensagens from './pages/TelasMensagens/PrimeiraTela';
import Configuracoes from './pages/TelasConfigurações/PrimeiraTela';
import Perfil from './pages/TelaPerfil/index';

const AppStack = createStackNavigator();

export default class Routes extends Component {
  render() {
    return (
      <NavigationContainer>
        <AppStack.Navigator
          headerMode="none"

        >
          <AppStack.Screen name="Perfil" component={Perfil} />
          <AppStack.Screen name="Configuracoes" component={Configuracoes} />
          <AppStack.Screen name="TelasIniciais" component={TelasIniciais} />
          <AppStack.Screen name="Cadastro" component={Cadastro} />
          <AppStack.Screen name="Login" component={Login} />
          <AppStack.Screen name="TelasMensagens" component={TelasMensagens} />
          <AppStack.Screen name="Feed" component={Feed} />
        </AppStack.Navigator>
      </NavigationContainer>
    );
  }
}   
