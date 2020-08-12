import {
  Text, View, Image, ScrollView,
} from 'react-native';
import React, { Component } from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { Feather as Icon } from '@expo/vector-icons';

// Import header and footer
import Header from '../../components/Header';
import Footer from '../../components/Footer';

// Import images and icons
import logo from '../../assets/images/logo.png';
import imageFlor from '../../assets/images/flor.png';
import imagePontosInterrog from '../../assets/images/pontoInterrog.png';
import imageCoracaoMao from '../../assets/images/coracaoMao.png';
import imageGrafico from '../../assets/images/grafico.png';
import imageCoracao from '../../assets/images/heart.png';
import imageSeta from '../../assets/images/arrowLeft.png';
import imageAmbulancia from '../../assets/images/ambulancia.png';
import imageCelular from '../../assets/images/celular.png';

// Import assets
import EstilizacaoPadrao from '../../assets/styles/global';
import styles from './styles';

export default class TelasIniciais extends Component {
  handleNavigationToLogin() {
    const { navigation } = this.props;
    navigation.navigate('Login');
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >

          <View style={styles.firstView}>
            <Image style={styles.imageLogoPag1} source={logo} />
            <Image style={styles.imageFlorTela1} source={imageFlor} />
            <Text style={styles.firstTitle}>Seja um Doador de Órgãos!!</Text>
          </View>

          <View style={styles.secondView}>
            <Image style={styles.imageLogo} source={logo} />
            <Text style={styles.secondViewText}>
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
            <Text style={styles.forthViewTitle}>Alguns dados</Text>
            <Image style={styles.imageFlor} source={imageFlor} />
            <Image style={styles.imageBarras} source={imageGrafico} />
            <Text style={styles.forthViewText}>
              Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.
            </Text>
          </View>

          <View style={styles.fifthView}>
            <Image style={styles.imageLogo} source={logo} />
            <Text style={styles.fifthViewTitle}>Como Funciona</Text>
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
            <Text style={styles.sixthViewTitle}>Nossa Rede Social</Text>
            <Text style={styles.sixthViewText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis augue risus.
              Morbi non aliquet turpis. Nullam quis condimentum massa, quis finibus sem.
            </Text>
            <View style={styles.nextPageView}>
              <Image source={imageCelular} style={styles.imageCelular} />
              <Text style={[styles.sixthViewTitle, styles.nextPageText]}>{'Entre ou \n cadastre-se já'}</Text>
              <RectButton
                style={styles.arrowIconRight}
                activeOpacity={0}
                onPress={() => this.handleNavigationToLogin()}
              >
                <View>
                  <Icon name="arrow-right" color="#696969" size={60} />
                </View>
              </RectButton>
            </View>
          </View>

        </ScrollView>
        <Footer />
      </View>
    );
  }
}
