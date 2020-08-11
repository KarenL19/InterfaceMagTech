import {
  Text, View, Image, StyleSheet, ScrollView, Dimensions,
} from 'react-native';
import React, { Component } from 'react';
import EstilizacaoPadrao from '../../../assets/styles/global';
import EstilizacaoPadraoInicial from '../../../assets/styles/stylesDifferent';
import SegundaTela from '../SegundaTela';

const deviceWidth = Dimensions.get('window').width;

export default class PrimeiraTela extends Component {
  render() {
    return (
      <View style={EstilizacaoPadrao.container}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <View style={EstilizacaoPadrao.headerFooter} />
          <View style={styles.firstView}>
            <Image
              style={styles.imageLogoPag1}
              source={require('../../../assets/images/logo.png')}
            />
            <Image
              style={styles.imageFlorTela1}
              source={require('../../../assets/images/flor.png')}
            />
            <Text style={styles.mainTitle}>
              Seja um Doador de Órgãos!!
            </Text>

          </View>
          <View style={styles.secondView}>
            <Image
              style={styles.imageLogo}
              source={require('../../../assets/images/logo.png')}
            />
            <Text style={{ fontSize: 20, paddingTop: 10 }}>
              Por que você deveria se tornar
            </Text>
            <Text style={{ fontSize: 20, paddingTop: 3 }}>
              um doador de órgãos?!
            </Text>
            <Image
              style={styles.imageFlor}
              source={require('../../../assets/images/flor.png')}
            />
            <Image
              style={styles.imagePontosInterrog}
              source={require('../../../assets/images/pontoInterrog.png')}
            />

          </View>
          <View style={EstilizacaoPadrao.headerFooter} />
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  firstView: {
    width: deviceWidth,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  secondView: {
    width: deviceWidth,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  imageLogoPag1: {
    height: 200,
    width: 400,
    position: 'relative',
    top: '20%',
  },
  imageFlorTela1: {
    height: 80,
    width: 80,
    position: 'relative',
    top: '45%',
    left: '37%',
  },
  mainTitle: {
    fontSize: 20,
    position: 'relative',
    top: '10%',
  },
  imageLogo: {
    height: 130,
    width: 250,
    paddingTop: 150,
  },
  imageFlor: {
    height: 80,
    width: 80,
    position: 'relative',
    top: '43%',
    left: '37%',
  },
  imagePontosInterrog: {
    height: 270,
    width: 250,
    bottom: '10%',
  },
});
