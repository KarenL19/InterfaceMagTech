import { StyleSheet, ScrollView } from 'react-native';

export default StyleSheet.create({
  container: {
    height: '100%',
  },

  body: {
    flex: 7,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',

  },
  headerFooter: {
    backgroundColor: '#34CBC5',
    flex: 1,
  },
  image: {
    height: 200,
    width: 400,

  },
  image2: {
    height: 130,
    width: 250
  },

  ScrollView: {
    horizontal = true,
    showsHorizontalScrollIndicator = true,
    scrollEventThrottle = 200,
    decelerationRate = "rápido",
    pagingEnabled,
    contentContainerStyle = {width: `$ {100 * intervalos}%`}

  }
  


});
