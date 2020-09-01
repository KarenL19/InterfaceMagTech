import React from 'react';
import { Text, View, Image } from 'react-native';

// Import header and footer
import Header from '../../components/HeaderWithIconsFmm';
import Footer from '../../components/FooterWithIcons';

import styles from './styles';

function TelaFeed() {
  return (
    <View style={styles.container}>
      <Header />
      <Footer />
    </View>
  );
}

export default TelaFeed;
