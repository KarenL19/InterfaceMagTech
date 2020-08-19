import {
  StatusBar, Text, View, Image, StyleSheet,
} from 'react-native';
import React, { Component } from 'react';
import EstilizacaoPadrao from '../../../assets/styles/global';
import EstilizacaoDiferenciada from '../../../assets/styles/stylesDifferent';
import CabecalhoConfig from '../../../components/HeaderWithIconsCG'
import prancheta  from '../../../assets/images/prancheta.png'

export default class PrimeiraTela extends Component {
  render() {
    return (
      <View>

      <CabecalhoConfig/>

      <View style={style.container}>
                               
        <View style={EstilizacaoPadrao.body}>

           
          <Image
              style={style.prancheta}
              source={prancheta}
            />


            

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

  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
 
  prancheta:{

    justifyContent: "center",
    alignItems: "center",
    alignSelf: 'center',
    height: 500,
    width: 360,
    padding: 10,
    marginTop: 10
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  }
});
