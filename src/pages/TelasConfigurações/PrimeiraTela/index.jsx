import {
  StatusBar, Text, View, ImageBackground, StyleSheet,
} from 'react-native';
import React, { Component } from 'react';
import EstilizacaoPadrao from '../../../assets/styles/global';
import EstilizacaoDiferenciada from '../../../assets/styles/stylesDifferent';
import CabecalhoConfig from '../../../components/HeaderWithIconsCG';
import prancheta from '../../../assets/images/prancheta.png';
import ModalPrivacidade from '../../../components/ModalConfgPrivacidade';
import ModalExame from '../../../components/ModalConfgExames';
import styles from '../../TelasIniciais/styles';

export default class PrimeiraTela extends Component {
  render() {
    return (
      <View>

        <CabecalhoConfig />

        <View style={styles.container}>

          <View style={EstilizacaoPadrao.body}>

            <ImageBackground
              style={style.prancheta}
              source={prancheta}
            >

              <View style={style.bottView}>
                <View style={style.privacidade}>
                  <ModalPrivacidade />
                </View>
                <View style={style.exames}>
                  <ModalExame />
                </View>

              </View>

            </ImageBackground>

          </View>

        </View>
      </View>

    );
  }
}

const style = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  prancheta: {

    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: 500,
    width: 360,
    padding: 10,
    marginTop: 10,
  },
  bottView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },

  privacidade: {
    marginTop: 20,

  },

  exames: {
    marginBottom: 100,
  },

});
