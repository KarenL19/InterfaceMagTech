import React, { useState } from 'react';
import {
  View, Text, Image, TextInput,
} from 'react-native';
import { RectButton, TouchableOpacity, Switch } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import logo from '../../assets/images/logo2.png';
import clipboardIcon from '../../assets/icons/clipboard.png';

import styles from './styles';
import Header from '../../components/HeaderWithoutIcons';
import Footer from '../../components/FooterWithoutIcons';

function Cadastro(props) {
  const [switchValue, setSwitchValue] = useState();

  function handleNavigationToLogin() {
    const { navigation } = props;
    navigation.navigate('Login');
  }

  function handleNavigationToFeed() {
    const { navigation } = props;
    navigation.navigate('Feed');
  }

  const toggleSwitch = (value) => setSwitchValue(value);

  return (
    <>
      <Header />
      <KeyboardAwareScrollView contentContainerStyle={styles.body}>
        <Image source={logo} style={styles.imageLogo} />
        <View style={styles.box}>
          <View style={styles.viewInput}>
            <Image
              source={clipboardIcon}
              style={styles.loginIcon}
            />
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
            <TextInput
              placeholder="Confirmar Senha"
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
          style={styles.cadastrarButton}
          onPress={() => handleNavigationToFeed()}
        >
          <Text>Cadastrar</Text>
        </RectButton>
        <TouchableOpacity onPress={() => handleNavigationToLogin()}>
          <Text>Já sou cadastrado</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
      <Footer />
    </>
  );
}

export default Cadastro;
