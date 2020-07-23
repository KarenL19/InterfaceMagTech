import React, { Component } from 'react';
import {
  View, Text, StyleSheet, Image,
} from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';

export default class UltimaTela extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../../../assets/log_3.png')} />
        <Text style={styles.title}>Nossa Rede Social</Text>
        <Text style={styles.bodyText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis augue risus. Morbi non aliquet turpis. Nullam quis condimentum massa, quis finibus sem.</Text>
        <View style={styles.nextPageView}>
          <Image
            source={require('../../../assets/celular.png')}
            style={styles.image}
          />
          <Text style={[styles.title, styles.nextPageText]}>{'Entre ou \n cadastre-se já'}</Text>
          <View style={styles.arrowIcon}>
            <Icon
              name="arrow-right"
              color="#696969"
              size={60}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 500,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 22,
  },
  nextPageView: {
    flexDirection: 'row',
    padding: 10,
  },
  nextPageText: {
    paddingTop: 75,
    paddingLeft: 20,
  },
  bodyText: {
    maxWidth: 240,
    margin: 20,
  },
  image: {
    width: 150,
  },
  arrowIcon: {
    justifyContent: 'center',
    paddingBottom: 20,
  },
});
