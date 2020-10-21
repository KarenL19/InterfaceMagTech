import React from 'react';
import {
  Text, View, Image, FlatList,
} from 'react-native';

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

// Import components
import ModalOpcoes from '../../components/ModalFeedOpcoes';

// Import styles
import styles from './styles';

const DATA = [
  {
    perfil: iconPerfil,
    nomeUsuario: 'Nome do Usuário',
    alerta: iconAlerta,
    opcoes: iconOpcoes,
    post: imagemPost,
    like: iconCoracao,
    comentar: iconCerebro,
    compartilhar: iconCompartilhar,
  },
  {
    perfil: iconPerfil,
    nomeUsuario: 'Nome do Usuário',
    alerta: iconAlerta,
    opcoes: iconOpcoes,
    post: imagemPost,
    like: iconCoracao,
    comentar: iconCerebro,
    compartilhar: iconCompartilhar,
  },
  {
    perfil: iconPerfil,
    nomeUsuario: 'Nome do Usuário',
    alerta: iconAlerta,
    opcoes: iconOpcoes,
    post: imagemPost,
    like: iconCoracao,
    comentar: iconCerebro,
    compartilhar: iconCompartilhar,
  },
  {
    perfil: iconPerfil,
    nomeUsuario: 'Nome do Usuário',
    alerta: iconAlerta,
    opcoes: iconOpcoes,
    post: imagemPost,
    like: iconCoracao,
    comentar: iconCerebro,
    compartilhar: iconCompartilhar,
  },
  {
    perfil: iconPerfil,
    nomeUsuario: 'Nome do Usuário',
    alerta: iconAlerta,
    opcoes: iconOpcoes,
    post: imagemPost,
    like: iconCoracao,
    comentar: iconCerebro,
    compartilhar: iconCompartilhar,
  },
  {
    perfil: iconPerfil,
    nomeUsuario: 'Nome do Usuário',
    alerta: iconAlerta,
    opcoes: iconOpcoes,
    post: imagemPost,
    like: iconCoracao,
    comentar: iconCerebro,
    compartilhar: iconCompartilhar,
  },
  {
    perfil: iconPerfil,
    nomeUsuario: 'Nome do Usuário',
    alerta: iconAlerta,
    opcoes: iconOpcoes,
    post: imagemPost,
    like: iconCoracao,
    comentar: iconCerebro,
    compartilhar: iconCompartilhar,
  },
  {
    perfil: iconPerfil,
    nomeUsuario: 'Nome do Usuário',
    alerta: iconAlerta,
    opcoes: iconOpcoes,
    post: imagemPost,
    like: iconCoracao,
    comentar: iconCerebro,
    compartilhar: iconCompartilhar,
  },
  {
    perfil: iconPerfil,
    nomeUsuario: 'Nome do Usuário',
    alerta: iconAlerta,
    opcoes: iconOpcoes,
    post: imagemPost,
    like: iconCoracao,
    comentar: iconCerebro,
    compartilhar: iconCompartilhar,
  },
  {
    perfil: iconPerfil,
    nomeUsuario: 'Nome do Usuário',
    alerta: iconAlerta,
    opcoes: iconOpcoes,
    post: imagemPost,
    like: iconCoracao,
    comentar: iconCerebro,
    compartilhar: iconCompartilhar,
  },
  {
    perfil: iconPerfil,
    nomeUsuario: 'Nome do Usuário',
    alerta: iconAlerta,
    opcoes: iconOpcoes,
    post: imagemPost,
    like: iconCoracao,
    comentar: iconCerebro,
    compartilhar: iconCompartilhar,
  },
];

function TelaFeed({ navigation }) {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <View style={styles.body}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <View style={styles.postContainer}>
              <View style={styles.postHeader}>
                <Image
                  source={item.perfil}
                  style={styles.backgroundPerfil}
                />
                <Text style={styles.usernameText}>{item.nomeUsuario}</Text>
                <Image
                  source={item.alerta}
                  style={styles.backgroundHeaderIcones}
                />
                <ModalOpcoes />
              </View>
              <View style={styles.viewCorpoPost}>
                <Image
                  source={item.post}
                  style={styles.corpoPost}
                />
              </View>
              <View style={styles.postFooter}>
                <Image
                  source={item.like}
                  style={styles.backgroundFooterIcones}
                />
                <Image
                  source={item.comentar}
                  style={styles.backgroundFooterIcones}
                />
                <Image
                  source={item.compartilhar}
                  style={styles.backgroundFooterIcones}
                />
              </View>
            </View>
          )}
        />
      </View>
      <Footer />
    </View>
  );
}

export default TelaFeed;
