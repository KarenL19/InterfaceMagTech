import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    height: '100%',
  },

  body: {
    flex: 7,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  campoDePesquisa: {
    height: '100%',
    width: '100%',
    marginTop: 126,
    // borderColor: 'black',
    // borderWidth: 2,
    // backgroundColor: '#dcdcdc',
    marginBottom: 126,
  },

  viewGeralContatos: {
    height: '100%',
    width: '100%',
    // borderColor: 'black',
    // borderWidth: 2,
    backgroundColor: 'white',
    marginTop: 100,
  },

  backgroundHeaderIcone: {
    height: 40,
    width: 40,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 20,
    marginLeft: 163,
  },

  imagemAviaoIcone: {
    height: 30,
    width: 30,
    margin: 3,
    marginTop: 5,
  },

  backgroundHeaderIconeFiltro: {
    height: 35,
    width: 35,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: -80,
    marginTop: 35,
    marginLeft: 320,
  },

  imagemFiltroIcone: {
    height: 25,
    width: 25,
    margin: 3,
    marginTop: 5,
    marginLeft: 4,
  },

  viewContatoUnitario: {
    height: 130,
    width: '100%',
    marginTop: 10,
    borderColor: '#dcdcdc',
    borderWidth: 2,
    backgroundColor: '#ffffff',
  },

  imagemPerfilIcone: {
    height: 40,
    width: 40,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: 'black',
    margin: 40,
    backgroundColor: 'white',
    marginLeft: 15,
  },

  nomeUsuario: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 116,
    color: '#000000',
    marginTop: -100,
  },

  mensagemUsuario: {
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 5,
    color: 'grey',
    marginTop: 10,
  },

  viewCampoDeBusca: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  campoDeBusca: {
    height: 30,
    width: 250,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 30,
    marginTop: 97,
    marginLeft: 30,
  },
});
