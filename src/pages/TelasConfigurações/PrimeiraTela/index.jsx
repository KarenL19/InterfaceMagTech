import {
  StatusBar, Text, View, ImageBackground, StyleSheet,
} from 'react-native';
import React, { Component } from 'react';
import EstilizacaoPadrao from '../../../assets/styles/global';
import EstilizacaoDiferenciada from '../../../assets/styles/stylesDifferent';
import CabecalhoConfig from '../../../components/HeaderWithIconsCG'
import prancheta  from '../../../assets/images/prancheta.png'
import Modal from '../../../components/Modal'

export default class PrimeiraTela extends Component {
  render() {
    return (
      <View>

      <CabecalhoConfig/>

      <View style={style.container}>
                               
        <View style={EstilizacaoPadrao.body}>

           
          <ImageBackground
              style={style.prancheta}
              source={prancheta}


            >


          <Modal/>

          </ImageBackground>

        </View>


            
      </View>
    </View>

    );
  }
}

const style = StyleSheet.create({

  container:{
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

   prancheta:{

    justifyContent: "center",
    alignItems: "center",
    alignSelf: 'center',
    height: 500,
    width: 360,
    padding: 10,
    marginTop: 10
  }

});
