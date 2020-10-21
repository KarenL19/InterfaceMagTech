import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    height: '100%',

  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,

  },

  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    height: 40,
    width: 40,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10,
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',

  },
  modalText: {
    marginBottom: 100,
    textAlign: 'center',

  },
  imagemMenu: {
    height: 35,
    width: 35,
    left: 1.7,
  },

  openButtonModal: {
    height: 40,
    width: 40,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 15,
    marginLeft: 15,
    marginTop: 10,
  },

  textoModal: {
    height: 40,
    width: 60,
    marginRight: 220,
    marginTop: 50,

  },

  barraCinza: {
    height: 100,
    width: 200,
    marginHorizontal: 45,
    textAlign: 'center',

  },

  barraCinzaMesmo: {
    height: 40,
    width: 70,
    marginRight: 220,
    marginTop: 50,
    borderBottomWidth: 1.5,
    borderBottomColor: '#dcdcdc',
  },

  imageExitIcon: {
    height: 30,
    width: 30,
  },
  exitButton: {
    borderRadius: 10,
    elevation: 2,
    borderWidth: 1,
    marginLeft: 250,
    borderColor: '#fff',
  },

});
