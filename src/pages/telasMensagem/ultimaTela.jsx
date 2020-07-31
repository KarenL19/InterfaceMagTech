import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import EstilizacaoPadrao from '../../styles/stylesDefault';
import EstilizacaoDiferenciada from '../../styles/stylesDifferent'

export default class PrimeiraTela extends Component {
    render() {
        return (
            <View style={EstilizacaoPadrao.container}>
                
                <View style={EstilizacaoPadrao.headerFooter}>
                
                    </View>
                
                
                    <View style={EstilizacaoPadrao.body}>
                    
                    
                        <Text style={{ fontSize:20, fontStyle:'normal',
                        position:'relative', bottom:'7%'}}>Mensagem</Text>
                        




                    </View>
                    
                <View style={EstilizacaoPadrao.headerFooter} >
                <View style={{flexDirection: "row"}}>
                <Image
                        style={EstilizacaoDiferenciada.imageLupa}
                        source={
                        require('../../assets/pesquisa2.png')
                        }
                        />  
                </View>
                    </View>
               
            </View>
        );
    }
}