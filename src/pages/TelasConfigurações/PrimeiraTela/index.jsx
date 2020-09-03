import {
  StatusBar, Text, View, ImageBackground, StyleSheet,
} from 'react-native';
import React, { Component } from 'react';
import CabecalhoConfig from '../../../components/HeaderWithIconsCG';
import Rodape from '../../../components/FooterWithIcons/index';
import prancheta from '../../../assets/images/prancheta.png';
import ModalPrivacidade from '../../../components/ModalConfgPrivacidade';
import ModalExame from '../../../components/ModalConfgExames';
import ModalConta from '../../../components/ModalConfgConta';
import ModalVer from '../../../components/ModalConfgVer';
import stylesDefault from '../../TelasIniciais/styles';

export default class PrimeiraTela extends Component {
  render() {
    return (
      <View>

        <View style={stylesDefault.container}>
          <CabecalhoConfig navigation={this.props.navigation} />
          <View style={styles.body}>

            <ImageBackground
              style={styles.prancheta}
              source={prancheta}
            />

            <View style={styles.topBottView}>
              <View style={styles.topStyle}>
                <ModalPrivacidade />
              </View>
              <View style={styles.topStyle}>
                <ModalVer />
              </View>
            </View>

            <View style={styles.bottomBottView}>
              <View style={styles.bottomStyle}>
                <ModalExame />
              </View>
              <View style={styles.bottomStyle}>
                <ModalConta />
              </View>
            </View>

          </View>
          <Rodape />
        </View>

      </View>

    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  body: {
    flex: 7,
    backgroundColor: '#D2D2D2',
    alignItems: 'center',
    justifyContent: 'flex-start',

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
  topBottView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    position: 'absolute',
    marginTop: 165,
    margin: 100,
  },
  bottomBottView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    position: 'absolute',
    bottom: 80,
    margin: 100,
  },
  topStyle: {
    marginLeft: 30,
    margin: 30,
  },
  bottomStyle: {
    margin: 30,
  },
});
