import React, { Component, useState } from 'react';
import {
  View, Text, StyleSheet, Image, TextInput, ImageBackground,
} from 'react-native';
import { RectButton, TouchableOpacity, Switch } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import logo from '../../assets/images/logo2.png';
import clipboardIcon from '../../assets/icons/clipboard.png';
import flowerBackground from '../../assets/images/fundoFlor.png';

import styles from './styles';
import Header from '../../components/HeaderWithoutIcons';
import Footer from '../../components/FooterWithoutIcons';
import api from '../../services/api';

function Cadastro(props) {
  const [switchValue, setSwitchValue] = useState();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState();
  const [error, setError] = useState('');

  async function handleSignUpPress() {
    if (email.length === 0 || senha.length === 0) {
      setError('Preencha usuário e senha para continuar o cadastro!');
    } else if (senha !== confirmSenha) {
      setError('Suas senhas não são copatíveis');
    } else {
      try {
        await api.post('/logins', {
          email,
          senha,
        });
        const { navigation } = props;
        navigation.navigate('Feed');
      } catch (_err) {
        setError('Este e-mail ja está sendo usado');
        console.log(_err);
      }
    }
  }

  function handleNavigationToLogin() {
    const { navigation } = props;
    navigation.navigate('Login');
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
              <Image
                source={clipboardIcon}
                style={styles.loginIcon}
              />
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
              <TextInput
                placeholder="Confirmar Senha"
                style={styles.input}
                placeholderTextColor="#000"
                secureTextEntry
                onChangeText={(value) => setConfirmSenha(value)}
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
            style={styles.cadastrarButton}
            onPress={() => handleSignUpPress()}
          >
            <Text>Cadastrar</Text>
          </RectButton>
          <TouchableOpacity onPress={() => handleNavigationToLogin()}>
            <Text>Já sou cadastrado</Text>
          </TouchableOpacity>
        </ImageBackground>
      </KeyboardAwareScrollView>
      <Footer />
    </>
  );
}

export default Cadastro;
