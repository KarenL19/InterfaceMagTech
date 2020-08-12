import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  imageLogo: {
    height: 130,
    width: 250,
    paddingTop: 150,
  },
  imageFlor: {
    height: 80,
    width: 80,
    position: 'relative',
    top: '43%',
    left: '37%',
  },
  firstView: {
    width: deviceWidth,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  imageLogoPag1: {
    height: 200,
    width: 400,
    position: 'relative',
    top: '20%',
    resizeMode: 'contain',
  },
  imageFlorTela1: {
    height: 80,
    width: 80,
    position: 'relative',
    top: '45%',
    left: '37%',
  },
  firstTitle: {
    fontSize: 20,
    position: 'relative',
    top: '10%',
  },
  secondView: {
    width: deviceWidth,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  secondViewText: {
    fontSize: 20,
    paddingTop: 10,
    maxWidth: 300,
    textAlign: 'center',
    lineHeight: 30,
  },
  imagePontosInterrog: {
    height: 270,
    width: 250,
    bottom: '10%',
  },
  thirdView: {
    width: deviceWidth,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  thirdTitle: {
    fontSize: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  thirdText: {
    fontSize: 16,
    paddingBottom: 15,
    maxWidth: 350,
    lineHeight: 24,
  },
  thirdImage: {
    height: 200,
    width: 300,
  },
  forthView: {
    width: deviceWidth,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  forthViewTitle: {
    fontSize: 20,
    paddingTop: 10,
  },
  forthViewText: {
    fontSize: 16,
    maxWidth: 300,
    bottom: '15%',
    lineHeight: 24,
  },
  imageBarras: {
    height: 200,
    width: 300,
    bottom: '12%',
  },
  fifthView: {
    width: deviceWidth,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  fifthViewTitle: {
    fontSize: 20,
    paddingBottom: 30,
  },
  fifthText: {
    fontSize: 16,
    marginBottom: 90,
    maxWidth: 350,
    lineHeight: 22,
  },
  fifthViewImages: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageHeart: {
    height: 130,
    resizeMode: 'contain',
  },
  imageArrowLeft: {
    height: 100,
    width: 90,
    marginLeft: -40,
    marginRight: 20,
    resizeMode: 'contain',
  },
  imageAmbulancia: {
    width: 120,
    marginRight: 60,
    resizeMode: 'contain',
  },
  sixthView: {
    width: deviceWidth,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sixthViewTitle: {
    fontSize: 22,
  },
  nextPageView: {
    flexDirection: 'row',
    padding: 10,
  },
  nextPageText: {
    paddingTop: 75,
    paddingLeft: 20,
  },
  sixthViewText: {
    fontSize: 16,
    maxWidth: 320,
    margin: 20,
    lineHeight: 24,
  },
  imageCelular: {
    width: 150,
    resizeMode: 'contain',
  },
  arrowIconRight: {
    justifyContent: 'center',
    paddingBottom: 20,
  },
});

export default styles;
