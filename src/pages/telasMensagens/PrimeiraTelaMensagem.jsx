import React from "react";
import {StatusBar,Text, View, Image} from 'react-native';
import Estilizacao from '../../styles/stylesDefault';


export default function PrimeiraTelaMensagem(){
    return(   
        
      <View style={Estilizacao.container}>
        <StatusBar style="auto"/>
        <View style={[Estilizacao.headerFooter,Estilizacao.headerComIcones]}>
        <Image style={Estilizacao.imagemPerfilIcone} 
          source={          
            require("../../assets/fotoPerfil.png")
          } 
          />
        <Text style={Estilizacao.tituloMensagensHeader}>Mensagens</Text>
        <View style={Estilizacao.backgroundIcone}>
        <Image style={Estilizacao.imagemSinoIcone} 
          source={          
            require("../../assets/sino.png")
          } 
          />
         </View> 
         <View style={Estilizacao.backgroundIcone}>
          <Image style={Estilizacao.imagemAviaoIcone} 
          source={          
            require("../../assets/IconeMensagem.png")
          } 
          />  
        </View>
        </View>
        <View style={Estilizacao.body}>
            
        </View>
        <View style={Estilizacao.headerFooter}>
        <View style={Estilizacao.footerComIcones}> 
        <View style={Estilizacao.backgroundIcone}>
        <Image style={Estilizacao.imagemSinoIcone} 
          source={          
            require("../../assets/lupaPesquisa.png")
          } 
          />
         </View> 
         <View style={Estilizacao.backgroundIcone}>
          <Image style={Estilizacao.imagemMagtechIcone} 
          source={          
            require("../../assets/iconeFeed.png")
          } 
          />  
        </View>
        <View style={Estilizacao.backgroundIcone}>
        <Image style={Estilizacao.imagemSinoIcone} 
          source={          
            require("../../assets/iconePostagem.png")
          } 
          />
         </View> 
         <View style={Estilizacao.backgroundIcone}>
          <Image style={Estilizacao.imagemAviaoIcone} 
          source={          
            require("../../assets/iconeMenu.png")
          } 
          />  
        </View>
        </View>
        </View>
      </View>
    );
}   