import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import { RectButton, TouchableOpacity, Switch } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

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
        <Image
          source={require('../../assets/images/logo2.png')}
          style={styles.image}
        />
        <View style={styles.box}>
          <View style={styles.viewInput}>
            <Image
              source={require('../../assets/icons/clipboard.png')}
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

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
  },
  body: {
    backgroundColor: '#d6d6d6',
    flex: 1,
    alignItems: "center"
  },
  box: {
    height: 350,
    backgroundColor: '#fff',
    width: 325,
    marginTop: 20,
    borderRadius: 50,
  },
  image: {
    height: 100,
  },
  loginIcon: {
    marginTop: 10,
  },
  input: {
    height: 30,
    width: 280,
    borderWidth: 1,
    borderRadius: 25,
    textAlign: 'center',
    marginTop: 10,
    backgroundColor: '#E6A9A9',
  },
  viewInput: {
    alignItems: 'center',
  },
  cadastrarButton: {
    borderWidth: 1,
    borderRadius: 25,
    padding: 10,
    width: 200,
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#E6A9A9',
    marginBottom: 5,
  },
  viewCheckbox: {
    flexDirection: 'row',
    margin: 10,
  },
  switchInput: {
    marginTop: 0,
  }
});