import React, { Component } from 'react';
import {
  StatusBar, Text, View, Image, StyleSheet,
} from 'react-native';

import iconBell from '../../assets/icons/sino.png';
import iconClipboard from '../../assets/icons/prancheta.png';
import iconMessage from '../../assets/icons/IconeMensagem.png';
import Estilizacao from '../../assets/styles/global';

export default class HeaderWithIconsCG extends Component {
  render() {
    return (
      <View style={Estilizacao.container}>
        <StatusBar style="auto" />
        <View style={[Estilizacao.headerFooter, styles.headerWithIcon]}>
          <View style={styles.backgroundIcon}>
            <Image
              style={styles.imageClipboard}
              source={iconClipboard}
            />
          </View>
          <Text style={styles.mainTitle}>TEXTO</Text>
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
  imageClipboard: {
    height: 27,
    width: 27,
    marginTop: 0,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    margin: 30,
    backgroundColor: 'white',
    marginLeft: 1,
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
    marginLeft: 10,
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
    marginLeft: 110,
    paddingTop: 40,
    color: '#000000',
    marginRight: 50,
    fontWeight: 'bold',
  },

});
