import React, { Component } from 'react';
import {
  Text, View, Image, StyleSheet,
} from 'react-native';

import iconBell from '../../assets/icons/sino.png';
import iconArrowLeftBlue from '../../assets/icons/arrowLeftBlue.png';
import iconMessage from '../../assets/icons/IconeMensagem.png';


import Estilizacao from '../assets/styles/global';

export default class HeaderWithIconsCG extends Component {
  render() {
    return (
      <View style={Estilizacao.container}>
        <StatusBar style="auto" />
        <View style={Estilizacao.headerFooter, styles.headerWithIcon}>
          <Image
            style={styles.imageArrowIcon}
            source={iconArrowLeftBlue}
          />
          <Text style={Estilizacao.tituloMensagensHeader}>CONFIGURAÇÕES GERAIS</Text>
          <View style={styles.backgroundIcon}>
            <Image
              style={styles.bellIcon}
              source={iconBell}
            />
          </View>
          <View style={styles.backgroundIcon}>
            <Image
              style={styles.planeIcon}
              source={iconMessage}
            />
          </View>
        </View>
      </View>

    );
  }
}
const styles = StyleSheet.create({
  headerWithIcon: {
    flexDirection: 'row',
  },
  imageArrowIcon: {
    height: 40,
    width: 40,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: 'black',
    margin: 40,
    backgroundColor: 'white',
    marginLeft: 15,
  },

  backgroundIcon: {
    height: 40,
    width: 40,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 20,
    marginTop: 40,
  },
  bellIcon: {
    height: 35,
    width: 35,
    margin: 2,
  },
  planeIcon: {
    height: 30,
    width: 30,
    margin: 3,
    marginTop: 5,
  },
  mainTitle: {
    fontSize: 20,
    marginLeft: 35,
    paddingTop: 45,
    color: '#000000',
    marginRight: 30,
  },

});
