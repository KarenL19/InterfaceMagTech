import { StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
      height: '100%'
    },     

    body: {
      flex: 7,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent:"space-between",
    
      
    },
    headerFooter: {
      backgroundColor: '#34CBC5',
      flex:1
    },
    image: {
       height: 100,
      width: 300,
      marginTop: 30
      
    } ,
      image2: {
      height: 200,
      width: 300,
      marginBottom: 300,
      justifyContent: "space-between",

    } ,
      tituloTerceiraTelaApresentacao:{
        fontSize:20,
        paddingBottom:50,
        paddingTop:60
      },


      textoTerceiraTelaApresentacao:{
      fontSize:13,
      paddingBottom: 50, 
    },
     imagemPerfil:{
      height: 50,
      width: 50,
      borderWidth: 1,
      borderRadius: 50,
      borderColor: 'black',
      //alignItems: "center",
      margin: 30,
      backgroundColor: 'white'    
     }
    


    
    
  });