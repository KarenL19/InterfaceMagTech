import React, { Component } from "react";
import {
  Alert,
  Modal,
  Text,
  TouchableHighlight, 
  View,   
  Image
} from "react-native";

import Opcoes from "../../assets/icons/botaoOpcoes.png"
import fechar from "../../assets/icons/exit.png"

import styles from "./styles";


export default class App extends Component {
  state = {
    modalVisible: false
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  render() {
    const { modalVisible } = this.state;
    return (
      <View>
        <View style={styles.centeredView}>
            
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
              <TouchableHighlight
                  style={styles.exitButton}
                  onPress={() => {
                    this.setModalVisible(!modalVisible);
                  }}
                >
                <Image style={styles.imageExitIcon}
                source={fechar}
                />
                </TouchableHighlight>
                
                <Image 
                style={styles.openButtonModal}
                source={Opcoes}
                />
                
                <View style={styles.textoModal}>
                <Text style={styles.barraCinza}>Ocultar anúncio </Text>
                </View>
                
                <View style={styles.textoModal}>
                <Text style={styles.barraCinza}>Copiar link</Text>
                </View>

                <View style={styles.textoModal}>
                <Text style={styles.barraCinza}>Enviar mensagem privada</Text>
                </View>

                <View style={styles.textoModal}>
                <Text style={styles.barraCinza}>Salvar publicação</Text>
                </View>
                

              </View>
            </View>
          </Modal>
          </View>
        <View>
          <TouchableHighlight style={styles.openButton} onPress={() => {
            this.setModalVisible(true);
           }}>
      
            <Image
            style={styles.imagemMenu}
            source={Opcoes}
            />
            
            
            </TouchableHighlight>
        </View>
        </View>

    );
  }
}

