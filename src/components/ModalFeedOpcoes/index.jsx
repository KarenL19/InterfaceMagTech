import React, { Component } from "react";
import {
  Alert,
  Modal,
  Text,
  TouchableHighlight, 
  View,   
  Image
} from "react-native";

import styles from "./styles";
import Opcoes from "../../assets/icons/botaoOpcoes.png"


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
                
                <Image 
                style={styles.openButtonModal}
                source={Opcoes}
                />
                <View style={styles.barraCinza}>
                <Text style={styles.textoModal}>Ocultar anúncio</Text>
                </View>
                <View style={styles.barraCinza}>
                <Text style={styles.textoModal}>Copiar link</Text>
                </View>
                <View style={styles.barraCinza}>
                <Text style={styles.textoModal}>Enviar mensagem privada</Text>
                </View>
                <View style={styles.barraCinza}>
                <Text style={styles.textoModal}>Salvar publicação</Text>
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

