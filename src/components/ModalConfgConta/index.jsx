import React, { Component } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
  TextInput,
  Keyboard,
} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from "./styles"
import { TouchableOpacity } from "react-native-gesture-handler";
import fechar from "../../assets/icons/exit.png"

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
                <View style={styles.titleModal}>
                <Text style={styles.textStyle}>Conta         </Text>                
                </View>
              <KeyboardAwareScrollView>
          
            <View style={styles.viewInput}>
            <Text style={styles.titleInput}>E-mail:</Text>
              <TextInput
                placeholder="example@example.com"
                style={styles.input}
                placeholderTextColor="#000"
              />
              <Text style={styles.titleInput}>Número de telefone:</Text>
              <TextInput
                placeholder="(xx) xxxxx-xxxx"
                style={styles.input}
                placeholderTextColor="#000"
              />             
              </View>          
        </KeyboardAwareScrollView>
        <View style={styles.viewTouch}>
        <TouchableOpacity style={styles.touch}>
        <Text>Gerenciar conta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touch}>
        <Text>Apagar conta</Text>
        </TouchableOpacity>
        </View>

                <TouchableHighlight
                  style={styles.saveButton}
                  onPress={() => {
                    this.setModalVisible(!modalVisible);
                  }}
                >
                  <Text style={styles.textStyle}>Salvar Alterações</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>
        </View>
        <View>
        <TouchableHighlight
          style={styles.openButton}
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Text style={styles.textStyle}>Conta        </Text>
        </TouchableHighlight>
        </View>
        </View>

    );
  }
}
