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
  backgroundIcones: {
    height: 40,
    width: 40,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 25,
  },
  backgroundPerfil: {
    height: 40,
    width: 40,
    borderRadius: 50,
    marginTop: 15,
    backgroundColor: 'white',
  },
  postContainer: {
    height: 485,
    width: deviceWidth,
    borderWidth: 1,
    backgroundColor: '#fff',
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  usernameText: {
    marginTop: 15,
    marginRight: 100,
  },
});

export default styles;
