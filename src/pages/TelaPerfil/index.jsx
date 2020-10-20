
import React from 'react';
import { Text, View, Image, ImageBackground } from 'react-native';

// Import header and footer
import Header from '../../components/HeaderWithIconsPerfil';
import Footer from '../../components/FooterWithIcons';

// Import icons and images
import iconPerfil from '../../assets/icons/fotoPerfil.png';
import barraSaude from '../../assets/images/barraSaude.png';

//Import components
import ModalBisturi from '../../components/ModalPerfilEditar';

//Import styles
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';



function Perfil() {
return (
  <View style={styles.container}>
    <Header /> 
    <View style={styles.body}>
    <ScrollView>
    
    <View style={styles.fotoContainer}>  
        <View style={styles.postHeader}>
        <Image
            source={iconPerfil}
            style={styles.fotoPerfil}
            />
        </View>
       
        </View>

      <View style={styles.postContainer}>
        <View style={styles.postHeader}>
          <View>
            <ModalBisturi/>
            <Text style={styles.usernameText}>Nome do Usuário</Text>
          </View>
          
          
        </View>

        <View style={styles.postContainer2}>  
        <View style={styles.postHeader}>
         
          <Text style={styles.sobreMimText}>Sobre mim: Olá me chamo "usuário", sou portador do
            tipo sanguíneo "A+" e pratico exercícios de cardio.
          </Text>
          
            
        </View>
        </View>

        <View style={styles.postContainer3}>  
        <View style={styles.postHeader}>
          
          <Text style={styles.barraSaudeText}>Força do seu perfil baseado na sua saúde:</Text>
          
          <View style={styles.viewBarraSaude}>
          <Image 
            source={barraSaude}
            style={styles.barraSaude}>
          </Image>
          </View>

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
