import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    height: '100%',
    
},

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    
  },
  
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
    width:0,
    height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    height: 40,
    width: 40,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10,
    marginBottom: 20,
   
  },
  textStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",

  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  imagemMenu: {
    height: 38,
    width: 38, 
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
    width: 40,
    marginRight: 15,
    marginLeft: 20,
    marginTop: 20,   
    
  }, 

  barraCinza:{
    //alignItems: "center",
    borderBottomWidth: 1.5,
    borderBottomColor: "#dcdcdc",
    paddingTop: 10 
  }
 
});