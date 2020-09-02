import React, { Component } from 'react';
import {
  StatusBar, Text, View, Image, StyleSheet,
} from 'react-native';

import iconBell from '../../assets/icons/sino.png';
import iconArrowLeftBlue from '../../assets/icons/arrowLeftBlue.png';
import iconMessage from '../../assets/icons/IconeMensagem.png';

import Estilizacao from '../../assets/styles/global';

export default class HeaderWithIconsCG extends Component {
  render() {
    return (
      <View>
        <StatusBar style="auto" />
        <View style={[Estilizacao.headerFooter, styles.headerWithIcon]}>
          <Image
            style={styles.imageArrowIcon}
            source={iconArrowLeftBlue}
          />
          <Text style={styles.mainTitle}>CONFIGURAÇÕES GERAIS</Text>
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
    height: 30,
    width: 30,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'black',
    margin: 30,
    backgroundColor: 'white',
    marginLeft: 15,
  },

  backgroundIcon: {
    height: 30,
    width: 30,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 15,
    marginTop: 30,
  },
  bellIcon: {
    height: 25,
    width: 25,
    margin: 2,
  },
  planeIcon: {
    height: 25,
    width: 25,
    margin: 1,
    marginTop: 3,
  },
  mainTitle: {
    fontSize: 15,
    marginLeft: 18,
    paddingTop: 40,
    color: '#000000',
    marginRight: 10,
    fontWeight: 'bold',
  },

});
