import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import { RectButton, TouchableOpacity, Switch } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import logo from '../../assets/images/logo2.png';
import clipboardIcon from '../../assets/icons/clipboard.png';

import styles from './styles';

export default class Cadastro extends Component {
  state = {
    switchValue: false,
  };

  handleNavigationToLogin() {
    const { navigation } = this.props;
    navigation.navigate('Login');
  }

  toggleSwitch = value => {
    this.setState({ switchValue: value });
  };

  render() {
    return (
      <KeyboardAwareScrollView contentContainerStyle={styles.body}>
        <Image source={logo} style={styles.imageLogo}/>
        <View style={styles.box}>
          <View style={styles.viewInput}>
            <Image
              source={clipboardIcon}
              style={styles.loginIcon}
            />
            <TextInput
              placeholder="Nome"
              style={styles.input}
              placeholderTextColor="#000"
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
                onValueChange={this.toggleSwitch}
                value={this.state.switchValue}
              />
              <Text style={{ marginTop: 18 }}>Sou um(a) profissional da saúde</Text>
            </View>
            {
              this.state.switchValue ?
                <View style={styles.viewInput}>
                  <TextInput
                    placeholder="Registro"
                    style={[styles.input, styles.switchInput]}
                    placeholderTextColor="#000"
                  />
                </View>
                : <></>
            }
          </View>
        </View>

        <RectButton style={styles.cadastrarButton}>
          <Text>Cadastrar</Text>
        </RectButton>
        <TouchableOpacity onPress={() => this.handleNavigationToLogin()}>
          <Text>Já sou cadastrado</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    );
  }
}