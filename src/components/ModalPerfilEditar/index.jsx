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
import bisturi from "../../assets/icons/bisturi.png"


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
	        <TouchableHighlight style={styles.openButton} onPress={() => {
            this.setModalVisible(true);
           }}>
            
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
                source={bisturi}
                />
                
                <View style={styles.textoModal}>
                <Text style={styles.barraCinza}>Editar perfil </Text>
                </View>
                                               
                <View style={styles.textoModal}>
                <Text style={styles.barraCinza}>Salvar alterações</Text>
                </View>
                
 
              </View>
            </View>
          </Modal>
          </TouchableHighlight>
          </View>
        <View>
      
            <Image
            style={styles.imagemMenu}
            source={bisturi}
            />
            
            
        </View>
        </View>

    );
  }
}

