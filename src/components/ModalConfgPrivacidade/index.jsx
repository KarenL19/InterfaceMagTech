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
} from "react-native";

import fechar from "../../assets/icons/exit.png"
import styles from "./styles"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import RNPickerSelect from 'react-native-picker-select';


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
                <Text style={styles.textStyle}>Privacidade         </Text>                
                </View>
              <KeyboardAwareScrollView>
          
            <View style={styles.viewInput}>
            <Text style={styles.titleInput}>Quem pode ver meu perfil?</Text>
            <View styles={styles.viewSelect}>
            <RNPickerSelect
            style={styles.viewSelect}
            onValueChange={(value) => console.log(value)}
            styles={styles.viewSelect}
            items={[
                { label: 'Público', value: 'Público' },
                { label: 'Privado', value: 'Privado' },
                { label: 'Apenas meus Contatos', value: 'Apenas meus contatos' },
            ]}
        />
        </View>
              <Text style={styles.titleInput}>Número de telefone:</Text>
              <View>
              <RNPickerSelect
            style={styles.viewSelect}
            onValueChange={(value) => console.log(value)}
            styles={styles.viewSelect}
            items={[
                { label: 'On-line', value: 'On-line' },
                { label: 'Off-line', value: 'Privado' },
                { label: 'Ocupado', value: 'Apenas meus contatos' },
                { label: 'Ausente', value: 'Apenas meus contatos' },
                { label: 'Volto logo', value: 'Apenas meus contatos' },
            ]}
        />
                </View>            
              </View>          
        </KeyboardAwareScrollView>

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
          <Text style={styles.textStyle}>Privacidade</Text>
        </TouchableHighlight>
        </View>
        </View>

    );
  }
}
