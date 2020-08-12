import {
  Text, View, Image, StyleSheet, ScrollView, Dimensions,
} from 'react-native';
import React, { Component } from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { Feather as Icon } from '@expo/vector-icons';

// Import images and icons
import logo from '../../../assets/images/logo.png';
import imageFlor from '../../../assets/images/flor.png';
import imagePontosInterrog from '../../../assets/images/pontoInterrog.png';
import imageCoracaoMao from '../../../assets/images/coracaoMao.png';
import imageGrafico from '../../../assets/images/grafico.png';
import imageCoracao from '../../../assets/images/heart.png';
import imageSeta from '../../../assets/images/arrowLeft.png';
import imageAmbulancia from '../../../assets/images/ambulancia.png';
import imageCelular from '../../../assets/images/celular.png';

// Import assets
import EstilizacaoPadrao from '../../../assets/styles/global';

const deviceWidth = Dimensions.get('window').width;

export default class PrimeiraTela extends Component {
  handleNavigationToLogin() {
    const { navigation } = this.props;
    navigation.navigate('Login');
  }

  render() {
    return (
      <View style={EstilizacaoPadrao.container}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <View style={EstilizacaoPadrao.headerFooter} />

          <View style={styles.firstView}>
            <Image style={styles.imageLogoPag1} source={logo} />
            <Image style={styles.imageFlorTela1} source={imageFlor} />
            <Text style={styles.firstTitle}>Seja um Doador de Órgãos!!</Text>
          </View>

          <View style={styles.secondView}>
            <Image style={styles.imageLogo} source={logo} />
            <Text style={{
              fontSize: 20, paddingTop: 10, maxWidth: 300, textAlign: 'center', lineHeight: 30,
            }}
            >
              Por que você deveria se tornar
              um doador de órgãos?!
            </Text>
            <Image style={styles.imageFlor} source={imageFlor} />
            <Image style={styles.imagePontosInterrog} source={imagePontosInterrog} />
          </View>

          <View style={styles.thirdView}>
            <Image style={styles.imageLogo} source={logo} />

            <Text style={styles.thirdTitle}>Sobre Doação de Órgãos</Text>

            <Text style={styles.thirdText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mauris in consectetur ipsum. Vivamus ligula odio, egestas vitae hendrerit et, placerat in leo.
              Donec vulputate lacinia mauris, quis rutrum risus sagittis eget.
            </Text>

            <Image style={styles.thirdImage} source={imageCoracaoMao} />
          </View>

          <View style={styles.forthView}>
            <Image style={styles.imageLogo} source={logo} />
            <Text style={{ fontSize: 20, paddingTop: 10 }}>Alguns dados</Text>
            <Image style={styles.imageFlor} source={imageFlor} />
            <Image style={styles.imageBarras} source={imageGrafico} />
            <Text style={styles.forthText}>
              Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.
            </Text>
          </View>

          <View style={styles.fifthView}>
            <Image style={styles.imageLogo} source={logo} />
            <Text style={{ fontSize: 20, paddingBottom: 30 }}>Como Funciona</Text>
            <Text style={styles.fifthText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mauris in consectetur ipsum. Vivamus ligula odio, egestas vitae hendrerit et, placerat in leo.
              Donec vulputate lacinia mauris, quis rutrum risus sagittis eget.
            </Text>

            <View style={styles.fifthViewImages}>
              <Image style={styles.imageHeart} source={imageCoracao} />
              <Image style={styles.imageArrowLeft} source={imageSeta} />
              <Image style={styles.imageAmbulancia} source={imageAmbulancia} />
            </View>
          </View>

          <View style={styles.sixthView}>
            <Image style={styles.imageLogo} source={logo} />
            <Text style={styles.title}>Nossa Rede Social</Text>
            <Text style={styles.bodyText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis augue risus.
              Morbi non aliquet turpis. Nullam quis condimentum massa, quis finibus sem.
            </Text>
            <View style={styles.nextPageView}>
              <Image source={imageCelular} style={styles.imageCelular} />
              <Text style={[styles.title, styles.nextPageText]}>{'Entre ou \n cadastre-se já'}</Text>
              <RectButton
                style={styles.arrowIconRight}
                activeOpacity={0}
                onPress={() => this.handleNavigationToLogin()}
              >
                <View>
                  <Icon
                    name="arrow-right"
                    color="#696969"
                    size={60}
                  />
                </View>
              </RectButton>
            </View>
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
  thirdView: {
    width: deviceWidth,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  forthView: {
    width: deviceWidth,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  fifthView: {
    width: deviceWidth,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  sixthView: {
    width: deviceWidth,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageLogoPag1: {
    height: 200,
    width: 400,
    position: 'relative',
    top: '20%',
    resizeMode: 'contain',
  },
  imageFlorTela1: {
    height: 80,
    width: 80,
    position: 'relative',
    top: '45%',
    left: '37%',
  },
  firstTitle: {
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
  thirdTitle: {
    fontSize: 20,
    paddingTop: 40,
    paddingBottom: 20,
  },
  thirdText: {
    fontSize: 13,
    paddingBottom: 20,
    maxWidth: 350,
    lineHeight: 22,
  },
  thirdImage: {
    height: 200,
    width: 300,
  },
  imageBarras: {
    height: 200,
    width: 300,
    bottom: '12%',
  },
  forthText: {
    fontSize: 15,
    maxWidth: 300,
    bottom: '15%',
  },
  fifthText: {
    fontSize: 13,
    marginBottom: 90,
    maxWidth: 350,
    lineHeight: 22,
  },
  fifthViewImages: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageHeart: {
    height: 130,
    resizeMode: 'contain',
  },
  imageArrowLeft: {
    height: 100,
    width: 90,
    marginLeft: -40,
    marginRight: 20,
    resizeMode: 'contain',
  },
  imageAmbulancia: {
    width: 120,
    marginRight: 60,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 22,
  },
  nextPageView: {
    flexDirection: 'row',
    padding: 10,
  },
  nextPageText: {
    paddingTop: 75,
    paddingLeft: 20,
  },
  bodyText: {
    maxWidth: 240,
    margin: 20,
  },
  imageCelular: {
    width: 150,
    resizeMode: 'contain',
  },
  arrowIconRight: {
    justifyContent: 'center',
    paddingBottom: 20,
  },
});
