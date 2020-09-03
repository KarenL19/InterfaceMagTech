import {
  Text, View, Image, TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './styles';
// Import images
import iconePerfil from '../../assets/icons/fotoPerfil.png';
import iconeSino from '../../assets/icons/sino.png';
import iconeAviao from '../../assets/icons/IconeMensagem.png';

function HeaderWithIcons(props) {
  function handleNavigationToMensagens() {
    const { navigation } = props;
    navigation.navigate('TelasMensagens');
  }

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
      <TouchableOpacity
        style={styles.backgroundHeaderIcone}
        onPress={() => handleNavigationToMensagens()}
      >
        <Image
          style={styles.imagemAviaoIcone}
          source={iconeAviao}
        />
      </TouchableOpacity>
    </View>
  );
}

export default HeaderWithIcons;
