import {
    Text, View, Image,
  } from 'react-native';
  import React, { Component } from 'react';
  import styles from './styles';
  // Import images
  import iconePrancheta from '../../assets/icons/prancheta.png';
  import iconeSino from '../../assets/icons/sino.png';
  import iconeAviao from '../../assets/icons/IconeMensagem.png';
  
  export default class HeaderWithIcons extends Component {
    render() {
      return (
        <View style={[styles.headerFooter, styles.headerComIcones]}>
          <View style={styles.backgroundHeaderIconePrancheta}>
          <Image
            style={styles.imagemPerfilIcone}
            source={iconePrancheta}
          />
          </View>
          <Text style={styles.tituloMensagensHeader}>Perfil</Text>
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
  