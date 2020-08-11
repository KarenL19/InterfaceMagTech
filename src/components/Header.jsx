import React, { Component } from 'react';
import { View } from 'react-native';
import EstiloPadrao from '../assets/styles/global';

export default class Header extends Component {
  render() {
    return (
      <View style={EstiloPadrao.headerFooter} />
    );
  }
}
