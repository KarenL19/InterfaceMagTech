import { View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles';
// Import Icons
import iconeLupa from '../../assets/icons/iconeLupa.png';
import iconeFeed from '../../assets/icons/iconeFeed.png';
import iconePostagem from '../../assets/icons/iconePostagem.png';
import iconeMenu from '../../assets/icons/iconeMenu.png';

function FooterWithIcons(props) {
  function handleNavigationToFeed() {
    const { navigation } = props;
    navigation.navigate('Feed');
  }

  return (
    <View style={[styles.footerComIcones, styles.headerFooter]}>
      <View
        style={styles.backgroundFooterIcone}
      >
        <Image
          style={styles.imagemLupaPostagem}
          source={iconeLupa}
        />
      </View>
      <TouchableOpacity
        style={styles.backgroundFooterIcone}
        onPress={handleNavigationToFeed}
      >
        <Image
          style={styles.imagemMagtechIcone}
          source={iconeFeed}
        />
      </TouchableOpacity>
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

export default FooterWithIcons;
