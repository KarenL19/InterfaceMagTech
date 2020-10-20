import React, { Component } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";

import styles from './style';
import {ScrollView, TouchableOpacity } from "react-native-gesture-handler";

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
              <View style={styles.viewGeralBlock}>
                <ScrollView>
                <View style={styles.viewTouch}>
        <TouchableOpacity style={styles.viewBlock}>
        <Text style={styles.textBlock}>Usuário bloqueado</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.viewTouch}>
        <TouchableOpacity style={styles.viewBlock}>
        <Text style={styles.textBlock}>Usuário bloqueado</Text>
        </TouchableOpacity>
        </View> 
        <View style={styles.viewTouch}>
        <TouchableOpacity style={styles.viewBlock}>
        <Text style={styles.textBlock}>Usuário bloqueado</Text>
        </TouchableOpacity>
        </View> 
        <View style={styles.viewTouch}>
        <TouchableOpacity style={styles.viewBlock}>
        <Text style={styles.textBlock}>Usuário bloqueado</Text>
        </TouchableOpacity>
        </View>  
        </ScrollView>         
        </View>

                <TouchableHighlight
                  style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                  onPress={() => {
                    this.setModalVisible(!modalVisible);
                  }}
                >
                  <Text style={styles.textStyle}>Fechar Modal</Text>
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
          <Text style={styles.textStyle}>Exame        </Text>

        </TouchableHighlight>
        </View>
        </View>

    );
  }
};

