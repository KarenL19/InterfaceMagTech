import {
  Text, View, Image, ScrollView,
} from 'react-native';
import React, { Component } from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { Feather as Icon } from '@expo/vector-icons';

// Import header and footer
import Header from '../../components/HeaderWithoutIcons';
import Footer from '../../components/FooterWithoutIcons';

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
import styles from './styles';

export default class TelasIniciais extends Component {
  handleNavigationToLogin() {
    const { navigation } = this.props;
    navigation.navigate('Cadastro');
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
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
            Um único doador que teve morte encefálica pode ajudar até dez pessoas que estão na fila de espera do transplante. É possível doar órgãos (coração, fígado, rins, pâncreas, pulmões e pele) e tecidos (ossos, córneas e medula óssea).
            </Text>

            <Image style={styles.thirdImage} source={imageCoracaoMao} />
          </View>

          <View style={styles.forthView}>
            <Image style={styles.imageLogo} source={logo} />
            <Text style={styles.forthViewTitle}>Dados sobre:</Text>
            <Image style={styles.imageFlor} source={imageFlor} />
            <Image style={styles.imageBarras} source={imageGrafico} />
            <Text style={styles.forthViewText}>
            De acordo com o Ministério da Saúde, o Brasil é referência mundial na área de transplantes e possui o maior sistema público de transplantes do mundo. Atualmente, cerca de 96% dos procedimentos de todo o País são financiados pelo Sistema Único de Saúde (SUS). Em números absolutos, o Brasil é o 2º maior transplantador do mundo, atrás apenas dos EUA. 
            </Text>
          </View>

          <View style={styles.fifthView}>
            <Image style={styles.imageLogo} source={logo} />
            <Text style={styles.fifthViewTitle}>Como Funciona</Text>
            <Text style={styles.fifthText}>
            É considerado como potencial doador, pacientes em morte cerebral ou encefálica. Em geral, as principais causas desse tipo de morte são: Traumatismo Crânio Encefálico; Acidente Vascular Encefálico (hemorrágico ou isquêmico); Encefalopatia Anóxica e Tumor Cerebral Primário.
            No Brasil, este diagnóstico é definido por meio da Resolução CFM nº 1480/97, devendo ser registrado no prontuário do paciente um Termo de Declaração de Morte Encefálica, descrevendo todos os elementos do exame neurológico.
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
              Temos como objetivo facilitar o processo de doação de
              orgãos por meio de interações reais de perfis médicos com 
              perfis de pessoas comuns. As pessoas poderão adicionar informações 
              médicas onde somente perfis médicos vão poder acessar. 
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
