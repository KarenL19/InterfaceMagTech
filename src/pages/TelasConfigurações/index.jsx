import { View, ImageBackground } from 'react-native';
import React from 'react';
import CabecalhoConfig from '../../components/HeaderWithIconsCG';
import Rodape from '../../components/FooterWithIcons/index';
import prancheta from '../../assets/images/prancheta.png';
import ModalPrivacidade from '../../components/ModalConfgPrivacidade';
import ModalExame from '../../components/ModalConfgExames';
import ModalConta from '../../components/ModalConfgConta';
import ModalVer from '../../components/ModalConfgVer';

import styles from './styles';

function PrimeiraTela({ navigation }) {
  return (
    <View>

      <View style={styles.container}>
        <CabecalhoConfig navigation={navigation} />
        <View style={styles.body}>

          <ImageBackground
            style={styles.prancheta}
            source={prancheta}
          />

          <View style={styles.topBottView}>
            <View style={styles.topStyle}>
              <ModalPrivacidade />
            </View>
            <View style={styles.topStyle}>
              <ModalVer />
            </View>
          </View>

          <View style={styles.bottomBottView}>
            <View style={styles.bottomStyle}>
              <ModalExame />
            </View>
            <View style={styles.bottomStyle}>
              <ModalConta />
            </View>
          </View>

        </View>
        <Rodape navigation={navigation} />
      </View>

    </View>

  );
}

export default PrimeiraTela;
