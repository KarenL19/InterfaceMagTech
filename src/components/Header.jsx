import React, { Component } from 'react';
import { View } from 'react-native';
import EstiloPadrao from '../styles/stylesDefault';

export default class Header extends Component {
  render() {
    return (
      <View style={EstiloPadrao.headerFooter} />
    );
  }
}
