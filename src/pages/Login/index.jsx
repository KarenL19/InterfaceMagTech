import React, { Component, useEffect, useState } from 'react';
import {
  Text, View, Image, TextInput, ImageBackground,
} from 'react-native';
import { RectButton, TouchableOpacity, Switch } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import api from '../../services/api';

import logo from '../../assets/images/logo2.png';
import loginIcon from '../../assets/icons/loginIcon.png';
import flowerBackground from '../../assets/images/fundoFlor.png';

import styles from './styles';
import Header from '../../components/HeaderWithoutIcons';
import Footer from '../../components/FooterWithoutIcons';

function Login(props) {
  const [switchValue, setSwitchValue] = useState();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');

  async function handleSignInPress() {
    if (email.length === 0 || senha.length === 0) {
      setError('Preencha usuário e senha para continuar!');
    } else {
      try {
        await api.post('/logins/login', {
          email,
          senha,
        });
        const { navigation } = props;
        navigation.navigate('Feed');
      } catch (_err) {
        setError('Houve um problema com o login, verifique suas credenciais!');
      }
    }
  }

  function handleNavigationToCadastro() {
    const { navigation } = props;
    navigation.navigate('Cadastro');
  }

  const toggleSwitch = (value) => {
    setSwitchValue(value);
  };

  return (
    <>
      <Header />
      <KeyboardAwareScrollView contentContainerStyle={styles.body}>
        <ImageBackground
          style={styles.flowerBackgound}
          source={flowerBackground}
        >
          <Image source={logo} style={styles.imageLogo} />
          <View style={styles.box}>
            <View style={styles.viewInput}>
              <Image source={loginIcon} style={styles.loginIcon} />
              <Text>{error}</Text>
              <TextInput
                placeholder="Email"
                style={styles.input}
                placeholderTextColor="#000"
                onChangeText={(value) => setEmail(value)}
              />
              <TextInput
                placeholder="Senha"
                style={styles.input}
                placeholderTextColor="#000"
                secureTextEntry
                onChangeText={(value) => setSenha(value)}
              />
              <View style={styles.viewCheckbox}>
                <Switch
                  style={{ margin: 10 }}
                  onValueChange={toggleSwitch}
                  value={switchValue}
                />
                <Text style={{ marginTop: 18 }}>Sou um(a) profissional da saúde</Text>
              </View>
              {
              switchValue
                ? (
                  <View style={styles.viewInput}>
                    <TextInput
                      placeholder="Registro"
                      style={[styles.input, styles.switchInput]}
                      placeholderTextColor="#000"
                    />
                  </View>
                )
                : <></>
              }
            </View>
          </View>

          <RectButton
            style={styles.logarButton}
            onPress={() => handleSignInPress()}
          >
            <Text>Logar</Text>
          </RectButton>
          <TouchableOpacity onPress={() => handleNavigationToCadastro()}>
            <Text>Ainda não possui cadastro?</Text>
          </TouchableOpacity>
        </ImageBackground>
      </KeyboardAwareScrollView>
      <Footer />
    </>
  );
}

export default Login;
