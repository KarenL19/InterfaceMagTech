import {
  StatusBar, Text, View, Image,
} from 'react-native';
import React, { Component } from 'react';
import styles from './styles';
//Import Icons
import iconeLupa from '../../assets/icons/lupaPesquisa.png';
import iconeFeed from '../../assets/icons/iconeFeed.png';
import iconePostagem from '../../assets/icons/iconePostagem.png';
import iconeMenu from '../../assets/icons/iconeMenu.png';


export default class FooterWithIcons extends Component {
  render() {
    return (
      <View style={[styles.footerComIcones, styles.headerFooter]}>
          <View style={styles.backgroundFooterIcone}>
            <Image
              style={styles.imagemLupaPostagem}
              source={iconeLupa}
            />
          </View>
          <View style={styles.backgroundFooterIcone}>
            <Image
              style={styles.imagemMagtechIcone}
              source={iconeFeed}
            />
          </View>
          <View style={styles.backgroundFooterIcone}>
            <Image
              style={styles.imagemLupaPostagem}
              source={iconePostagem}
            />
          </View>
          <View style={styles.backgroundFooterIcone}>
            <Image
              style={styles.imagemMenu}
              source={iconeMenu}
            />
        </View>
      </View> 
      );
  }
}