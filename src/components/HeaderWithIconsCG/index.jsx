import React, { Component } from 'react';
import {
  Text, View, Image, StyleSheet,
} from 'react-native';

import arrowLeftBlue from '../../assets/icons/arrowLeftBlue';

import Estilizacao from '../assets/styles/global';

export default class HeaderWithIconsCG extends Component {
  render() {
    return (
      <View style={Estilizacao.container}>
        <StatusBar style="auto" />
        <View style={Estilizacao.headerFooter, style.headerWithIcon}>
          <Image
            style={style.imageArrowIcon}
            source={arrowLeftBlue}
          />
          <View style={style.backgroundIcon}>
            <Image
              style={style.bellIcon}
              source={
                  require('../../assets/icons/sino.png')
                }
            />
          </View>
          <View style={style.backgroundIcon}>
            <Image
              style={style.planeIcon}
              source={
                  require('../../assets/icons/IconeMensagem.png')
                }
            />
          </View>
        </View>
      </View>

    );
  }
}
const style = StyleSheet.create({
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

});
