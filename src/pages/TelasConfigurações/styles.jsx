import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  body: {
    flex: 7,
    backgroundColor: '#D2D2D2',
    alignItems: 'center',
    justifyContent: 'flex-start',

  },

  prancheta: {

    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: 500,
    width: 360,
    padding: 10,
    marginTop: 10,
  },
  topBottView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    position: 'absolute',
    marginTop: 165,
    margin: 100,
  },
  bottomBottView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    position: 'absolute',
    bottom: 80,
    margin: 100,
  },
  topStyle: {
    marginLeft: 30,
    margin: 30,
  },
  bottomStyle: {
    margin: 30,
  },

});

export default styles;
