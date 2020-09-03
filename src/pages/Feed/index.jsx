import React from 'react';
import { Text, View, Image } from 'react-native';

// Import header and footer
import Header from '../../components/HeaderWithIconsFMM';
import Footer from '../../components/FooterWithIcons';

// Import icons and images
import iconPerfil from '../../assets/icons/fotoPerfil.png';
import iconAlerta from '../../assets/icons/botaoAlerta.png';
import iconOpcoes from '../../assets/icons/botaoOpcoes.png';
import iconCoracao from '../../assets/icons/coracaoPost.png';
import iconCerebro from '../../assets/icons/cerebroPost.png';
import iconCompartilhar from '../../assets/icons/compartilharPost.png';
import imagemPost from '../../assets/images/imagemPost.png';

import styles from './styles';

const data = [
  {
    perfil: iconPerfil,
    alerta: iconAlerta,
    opcoes: iconOpcoes,
    post: imagemPost,
    like: iconCoracao,
    comentar: iconCerebro,
    compartilhar: iconCompartilhar,
  },
  {
    perfil: iconPerfil,
    alerta: iconAlerta,
    opcoes: iconOpcoes,
    post: imagemPost,
    like: iconCoracao,
    comentar: iconCerebro,
    compartilhar: iconCompartilhar,
  },
  {
    perfil: iconPerfil,
    alerta: iconAlerta,
    opcoes: iconOpcoes,
    post: imagemPost,
    like: iconCoracao,
    comentar: iconCerebro,
    compartilhar: iconCompartilhar,
  },
  {
    perfil: iconPerfil,
    alerta: iconAlerta,
    opcoes: iconOpcoes,
    post: imagemPost,
    like: iconCoracao,
    comentar: iconCerebro,
    compartilhar: iconCompartilhar,
  },
  {
    perfil: iconPerfil,
    alerta: iconAlerta,
    opcoes: iconOpcoes,
    post: imagemPost,
    like: iconCoracao,
    comentar: iconCerebro,
    compartilhar: iconCompartilhar,
  },
];

function TelaFeed() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.body}>
        <View style={styles.postContainer}>
          <View style={styles.postHeader}>
            <Image
              source={iconPerfil}
              style={styles.backgroundPerfil}
            />
            <Text style={styles.usernameText}>Nome do Usuário</Text>
            <Image
              source={iconAlerta}
              style={styles.backgroundIcones}
            />
            <Image
              source={iconOpcoes}
              style={styles.backgroundIcones}
            />
          </View>
        </View>
      </View>
      <Footer />
    </View>
  );
}

export default TelaFeed;
