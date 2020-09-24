import React, { Component, useEffect, useState } from 'react';
import {
  Text, View, Image, TextInput,
} from 'react-native';
import { RectButton, TouchableOpacity, Switch } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import api from '../../services/api';

import logo from '../../assets/images/logo2.png';
import loginIcon from '../../assets/icons/loginIcon.png';

import styles from './styles';
import Header from '../../components/HeaderWithoutIcons';
import Footer from '../../components/FooterWithoutIcons';

function Login(props) {
  const [switchValue, setSwitchValue] = useState();

  useEffect(() => {
    api.get('logins').then((response) => {
      console.log(response.data[0].email);
    });
  }, []);

  function handleNavigationToCadastro() {
    const { navigation } = props;
    navigation.navigate('Cadastro');
  }

  function handleNavigationToConfiguracoes() {
    const { navigation } = props;
    navigation.navigate('Configuracoes');
  }

  const toggleSwitch = (value) => {
    setSwitchValue(value);
  };

  return (
    <>
      <Header />
      <KeyboardAwareScrollView contentContainerStyle={styles.body}>
        <Image source={logo} style={styles.imageLogo} />
        <View style={styles.box}>
          <View style={styles.viewInput}>
            <Image source={loginIcon} style={styles.loginIcon} />
            <TextInput
              placeholder="Email"
              style={styles.input}
              placeholderTextColor="#000"
            />
            <TextInput
              placeholder="Senha"
              style={styles.input}
              placeholderTextColor="#000"
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
          onPress={() => handleNavigationToConfiguracoes()}
        >
          <Text>Logar</Text>
        </RectButton>
        <TouchableOpacity onPress={() => handleNavigationToCadastro()}>
          <Text>Ainda não possui cadastro?</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
      <Footer />
    </>
  );
}

export default Login;
