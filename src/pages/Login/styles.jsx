import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
  },
  body: {
    backgroundColor: '#d6d6d6',
    flex: 1,
    alignItems: 'center',
  },
  box: {
    height: 300,
    backgroundColor: '#fff',
    width: 325,
    marginTop: 20,
    borderRadius: 50,
  },
  imageLogo: {
    height: 125,
    resizeMode: 'contain',
  },
  loginIcon: {
    marginTop: 10,
  },
  input: {
    height: 40,
    width: 300,
    borderWidth: 1,
    borderRadius: 25,
    textAlign: 'center',
    marginTop: 10,
    backgroundColor: '#E6A9A9',
  },
  viewInput: {
    alignItems: 'center',
  },
  flowerBackgound: {

    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: 543,
    width: 390,
    padding: 10,
    marginTop: 0,
  },
  logarButton: {
    borderWidth: 1,
    borderRadius: 25,
    padding: 10,
    width: 200,
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#E6A9A9',
    marginBottom: 5,
  },
  viewCheckbox: {
    flexDirection: 'row',
    margin: 10,
  },
  switchInput: {
    marginTop: 0,
  },
});

export default styles;
