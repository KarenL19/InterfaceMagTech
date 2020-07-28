import React from "react";
import {StatusBar,Text, View, Image} from 'react-native';
import Estilizacao from '../../styles/stylesDefault';


export default function QuintaTelaApresentacao(){
    return(   
        
        <View style={Estilizacao.container}>
        <StatusBar style="auto" />
        <View style={Estilizacao.headerFooter}>
        <Image style={Estilizacao.imagemPerfil} 
          source={          
            require("../../assets/fotoPerfil.png")
          } 
          />
        </View>
        <View style={Estilizacao.body}>
            
        </View>
        <View style={Estilizacao.headerFooter}>
        </View>
      </View>
    );
}   