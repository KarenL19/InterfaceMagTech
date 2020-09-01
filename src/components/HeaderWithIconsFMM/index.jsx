import {
  StatusBar, Text, View, Image,
} from 'react-native';
import React, { Component } from 'react';
import styles from './styles';
//Import images
import iconePerfil from '../../assets/icons/fotoPerfil.png';
import iconeSino from '../../assets/icons/sino.png';
import iconeAviao from '../../assets/icons/IconeMensagem.png';


export default class HeaderWithIcons extends Component {
  render() {
    return (
      <View style={[styles.headerFooter, styles.headerComIcones]}>
          <Image
            style={styles.imagemPerfilIcone}
            source={iconePerfil}
          />
          <Text style={styles.tituloMensagensHeader}>Mensagens</Text>
          <View style={styles.backgroundHeaderIcone}>
            <Image
              style={styles.imagemSinoIcone}
              source={iconeSino}
            />
          </View>
          <View style={styles.backgroundHeaderIcone}>
            <Image
              style={styles.imagemAviaoIcone}
              source={iconeAviao}
            />
          </View>
        </View> 
    );
  }
}