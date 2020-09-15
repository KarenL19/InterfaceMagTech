import React from 'react';
import { Text, View, Image } from 'react-native';

// Import header and footer
import Header from '../../components/HeaderWithIconsFMM';
import Footer from '../../components/FooterWithIcons';

// Import icons and images
import iconPerfil from '../../assets/icons/fotoPerfil.png';
import iconAlerta from '../../assets/icons/botaoAlerta.png';
import iconOpcoes from '../../assets/icons/botaoOpcoes.png';

//Import components
import ModalOpcoes from '../../components/ModalFeedOpcoes';


//Import styles
import styles from './styles';



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
          <ModalOpcoes/>
          
        </View>
      </View>
    </View>
    <Footer />
  </View>
);
}

export default TelaFeed;
