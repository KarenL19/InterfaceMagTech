import {
  Text, View, Image, TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './styles';
// Import images
import iconePrancheta from '../../assets/icons/prancheta.png';
import iconeSino from '../../assets/icons/sino.png';
import iconeAviao from '../../assets/icons/IconeMensagem.png';

function HeaderWithIcons(props) {
  function handleNavigationToMensagens() {
    const { navigation } = props;
    navigation.navigate('TelasMensagens');
  }

  function handleNavigationToConfiguracoes() {
    const { navigation } = props;
    navigation.navigate('Configuracoes');
  }

  return (
    <View style={[styles.headerFooter, styles.headerComIcones]}>
      <TouchableOpacity
        style={styles.backgroundHeaderIconePrancheta}
        onPress={handleNavigationToConfiguracoes}
      >
        <Image
          style={styles.imagemPerfilIcone}
          source={iconePrancheta}
        />
      </TouchableOpacity>
      <Text style={styles.tituloMensagensHeader}>Perfil</Text>
      <View style={styles.backgroundHeaderIcone}>
        <Image
          style={styles.imagemSinoIcone}
          source={iconeSino}
        />
      </View>
      <TouchableOpacity
        style={styles.backgroundHeaderIcone}
        onPress={handleNavigationToMensagens}
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
