import React, { Component } from 'react';
import { Text, View, Image,Dimensions } from 'react-native';
import EstilizacaoPadrao from '../../../styles/stylesDefault';
import EstilizacaoDiferenciada from '../../../styles/stylesDifferent'

export default class QuartaTela extends Component {
    render() {
        return(
            <View style={EstilizacaoPadrao.container}>
                <View style={EstilizacaoPadrao.headerFooter} />
                    <View style={EstilizacaoPadrao.body}>
                        <Image
                        style={EstilizacaoDiferenciada.imageLogoPag23456}
                        source={
                        require('../../../assets/log_3.png')
                         }
                        />
                        <Text style={{ fontSize: 20, paddingTop: 10}}>
                        Alguns dados</Text>
                        <Image
                        style={EstilizacaoDiferenciada.imageFlorTela4}
                        source={
                        require('../../../assets/flor.png')
                        }
                        />         
                        <Image
                        style={EstilizacaoDiferenciada.imageBarras}
                        source={
                        require('../../../assets/graficoBarras.png')
                        }
                        />  
                        <Text style={{ fontSize: 15, bottom:'20%'}}>
                            Lorem Ipsum is simply dummy text of the
                        </Text> 
                        <Text style={{ fontSize: 15, bottom:'19%'}}>
                            printing and typesetting industry.
                        </Text>  
                        
                    </View>
                <View style={EstilizacaoPadrao.headerFooter} />
            </View>







        )


    }


}