import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  body: {
    flex: 6,
    backgroundColor: '#D0D0D0',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  backgroundIcones: {
    height: 40,
    width: 40,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 15,
    marginLeft: 20,
  },
  fotoPerfil: {
    height: 160,
    width: 160,
    borderRadius: 50,
    marginTop: 25,
    marginLeft: 20,
    backgroundColor: 'white',
    // resizeMode: "stretch"
  },

  postContainer: {
    flex: 4,
    height: 160,
    width: deviceWidth,
    borderWidth: 1,
    backgroundColor: '#fff',
    // justifyContent: "space-between",
    marginTop: -80,
  },

  postContainer2: {
    justifyContent: 'space-between',
    height: 120,
    width: deviceWidth,
    borderWidth: 1,
    marginTop: 48,
    backgroundColor: '#fff',
    justifyContent: 'center',

  },

  postContainer3: {
    justifyContent: 'space-between',
    height: 120,
    width: deviceWidth,
    borderWidth: 1,
    marginTop: 20,
    backgroundColor: '#fff',
    marginBottom: 60,
    // flexDirection: "column"
  },

  fotoContainer: {
    flex: 2,
    height: 200,
    width: 200,
    borderWidth: 1,
    marginTop: 100,
    backgroundColor: '#fff',
    marginLeft: 85,
    borderRadius: 100,
    justifyContent: 'flex-start',
    zIndex: 999,
  },

  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  usernameText: {
    marginTop: 60,
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 120,

  },
  sobreMimText: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 28,

  },

  barraSaudeText: {
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 28,
    marginTop: 15,
  },

  barraSaude: {
    resizeMode: 'contain',
    // paddingRight: 100
    marginLeft: -255,
    marginTop: 30,

  },

  viewBarraSaude: {
    marginTop: 30,
    marginRight: 60,
  },

  viewUsernameText: {
    // marginRight: -50
  },

});

export default styles;
