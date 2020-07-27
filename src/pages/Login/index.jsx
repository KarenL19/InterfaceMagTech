import React, { Component } from 'react';
import {
  Text, StyleSheet, View, Image, TextInput, CheckBox,
} from 'react-native';
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';

export default class Login extends Component {
  handleNavigationToCadastro() {
    const { navigation } = this.props;
    navigation.navigate('Cadastro');
  }

  render() {
    return (
      <View style={styles.body}>
        <Image
          source={require('../../assets/logo2.png')}
          style={styles.image}
        />
        <View style={styles.box}>
          <View style={styles.viewInput}>
            <Image
              source={require('../../assets/loginIcon.png')}
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
          </View>
          <CheckBox style={styles.checkbox} />
          <Text>Sou um(a) profissional da saúde</Text>
        </View>

        <RectButton style={styles.logarButton}>
          <Text>Logar</Text>
        </RectButton>
        <TouchableOpacity onPress={() => this.handleNavigationToCadastro()}>
          <Text>Ainda não possui cadastro?</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
  },
  body: {
    backgroundColor: '#d6d6d6',
    flex: 1,
    alignItems: 'center',
  },
  box: {
    height: 300,
    backgroundColor: '#fff',
    width: 325,
    marginTop: 20,
    borderRadius: 50,
  },
  image: {
    height: 125,
  },
  loginIcon: {
    marginTop: 20,
  },
  input: {
    height: 40,
    width: 180,
    borderWidth: 1,
    borderRadius: 25,
    textAlign: 'center',
    marginTop: 20,
    backgroundColor: '#E6A9A9',
  },
  viewInput: {
    alignItems: 'center',
  },
  logarButton: {
    borderWidth: 1,
    borderRadius: 25,
    padding: 20,
    width: 200,
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#E6A9A9',
    marginBottom: 5,
  },
  checkbox: {
    height: 20,
    width: 20,
    margin: 10,
  },
});
