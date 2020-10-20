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
    flexDirection: 'row',
  },
  backgroundHeaderIcones: {
    height: 40,
    width: 40,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 15,
    marginLeft: 20,
  },
  backgroundPerfil: {
    height: 40,
    width: 40,
    borderRadius: 50,
    marginTop: 25,
    backgroundColor: 'white',
  },
  postContainer: {
    height: 485,
    width: deviceWidth,
    backgroundColor: '#fff',
    marginTop: 10,
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  usernameText: {
    marginTop: 25,
    marginRight: 100,
  },
  corpoPost: {
    resizeMode: 'contain',
    height: 300,
    marginTop: 10,
    marginBottom: 10,
  },
  viewCorpoPost: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    marginTop: 20,
  },
  postFooter: {
    flexDirection: 'row',
  },
  backgroundFooterIcones: {
    height: 50,
    width: 50,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 15,
    marginLeft: 15,
  },
});

export default styles;
