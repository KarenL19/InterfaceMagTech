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
    marginLeft: 20
  },
  backgroundPerfil: {
    height: 40,
    width: 40,
    borderRadius: 50,
    marginTop: 15,
    marginLeft: 10,
    backgroundColor: 'white',
  },
  postContainer: {
    justifyContent: "space-between",
    height: 160,
    width: deviceWidth,
    borderWidth: 1,
    backgroundColor: '#fff',
    marginTop: 130,
  },

  postContainer2: {
    justifyContent: "space-between",
    height: 120,
    width: deviceWidth,
    borderWidth: 1,
    marginTop: 60,
    backgroundColor: '#fff',
  },

  postContainer3: {
    justifyContent: "space-between",
    height: 120,
    width: deviceWidth,
    borderWidth: 1,
    marginTop: 20,
    backgroundColor: '#fff',
    marginBottom: 20
  },


  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  usernameText: {
    marginTop: 100,
    fontWeight: "bold",
    fontSize: 15,
    marginLeft: 120 
    
  },
});

export default styles;
