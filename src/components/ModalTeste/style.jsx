import { StyleSheet } from 'react-native'; 

const styles = StyleSheet.create({

  input: {
    height: 40,
    width: 200,
    borderWidth: 1,
    textAlign: 'center',
    marginTop: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  viewSelect: {
    height: 40,
    width: 200,
    borderWidth: 1,
    textAlign: 'center',
    marginTop: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderColor: '#000000',
  },
  viewBlock: {
    height: 30,
    textAlign: 'center',
    marginTop: 2,
    borderBottomWidth: 2,
    backgroundColor: '#fff',
    width: 200,
    borderColor: '#dcdcdc',
    alignItems: 'center',
  },

  textBlock: {
    fontSize: 17,
  },

  viewInput: {
    alignItems: 'center',
  },
  saveButton: {
    backgroundColor: '#34CBC5',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    borderWidth: 1,
    marginTop: 50,
  },
  viewTouch: {
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 15,
    marginRight: 15,
  },
  viewGeralBlock: {
    borderColor: '#dcdcdc',
    borderWidth: 1,
    marginTop: 20,
    marginBottom: 50,
    height: 110,
  },
  titleInput: {
    marginTop: 30,
  },
  centeredView: {
    flex: 1,
    alignItems: 'stretch',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    flexDirection: 'column',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#FFE6E6',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    borderWidth: 1,
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  titleModal: {
    backgroundColor: '#FFE6E6',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    borderWidth: 1,
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

export default styles;
