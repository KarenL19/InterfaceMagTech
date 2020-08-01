import React from "react";
import {StatusBar,Text, View, Image} from 'react-native';
import Estilizacao from '../../styles/stylesDefault';


export default function QuintaTelaApresentacao(){
    return(   
        
        <View style={Estilizacao.container}>
        <StatusBar style="auto" />
        <View style={Estilizacao.headerFooter}>
        </View>
        <View style={Estilizacao.body}>
        
        <Image style={Estilizacao.image} 
          source={          
            require("../../assets/log_3.png")
          } 
          />
        
        <Text style={{fontSize:20,paddingBottom:30}}>Sobre Doação de Órgãos</Text>

        <Image style={Estilizacao.image} 
          source={          
            require("../../assets/quintaTela.png")
          } 
          />            

          <Text style={{fontSize:13,marginBottom:90}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Mauris in consectetur ipsum. Vivamus ligula odio, egestas vitae hendrerit et, placerat in leo.
           Donec vulputate lacinia mauris, quis rutrum risus sagittis eget.</Text>
  
        </View>
        <View style={Estilizacao.headerFooter}>
        </View>
      </View>
    );
}   