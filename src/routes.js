import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import Pages
import TelasIniciais from './pages/TelasIniciais';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Feed from './pages/Feed';
import TelasMensagens from './pages/TelasMensagens';
import Configuracoes from './pages/TelasConfigurações';
import Perfil from './pages/TelaPerfil';

const AppStack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode="none"
      >
        <AppStack.Screen name="TelasIniciais" component={TelasIniciais} />
        <AppStack.Screen name="Cadastro" component={Cadastro} />
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="Feed" component={Feed} />
        <AppStack.Screen name="Perfil" component={Perfil} />
        <AppStack.Screen name="Configuracoes" component={Configuracoes} />
        <AppStack.Screen name="TelasMensagens" component={TelasMensagens} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
