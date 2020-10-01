
import React from 'react';
import { Text, View, Image } from 'react-native';

// Import header and footer
import Header from '../../components/HeaderWithIconsFMM';
import Footer from '../../components/FooterWithIcons';

// Import icons and images
import iconPerfil from '../../assets/icons/fotoPerfil.png';
import iconAlerta from '../../assets/icons/botaoAlerta.png';

//Import components



//Import styles
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';



function Perfil() {
return (
  <View style={styles.container}>
    <Header />
    <View style={styles.body}>
    <ScrollView>
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
          
        </View>
        
        <View style={styles.postContainer2}>  
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
          
        </View>
        </View>
        
      </View>
      </ScrollView>
    </View>
    <Footer />
  </View>
);
}

export default Perfil;
