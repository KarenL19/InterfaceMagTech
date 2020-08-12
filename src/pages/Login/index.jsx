import React, { Component } from 'react';
import {
  Text, View, Image, TextInput
} from 'react-native';
import { RectButton, TouchableOpacity, Switch } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import logo from '../../assets/images/logo2.png';
import loginIcon from '../../assets/icons/loginIcon.png';

import styles from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default class Login extends Component {
  state = {
    switchValue: false,
  };

  handleNavigationToCadastro() {
    const { navigation } = this.props;
    navigation.navigate('Cadastro');
  }

  toggleSwitch = value => {
    this.setState({ switchValue: value });
  };

  render() {
    return (
      <>
        <Header />
        <KeyboardAwareScrollView contentContainerStyle={styles.body}>
          <Image source={logo} style={styles.imageLogo}/>
          <View style={styles.box}>
            <View style={styles.viewInput}>
              <Image source={loginIcon} style={styles.loginIcon}/>
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

          <RectButton style={styles.logarButton}>
            <Text>Logar</Text>
          </RectButton>
          <TouchableOpacity onPress={() => this.handleNavigationToCadastro()}>
            <Text>Ainda não possui cadastro?</Text>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
        <Footer />
      </>
    );
  }
}
