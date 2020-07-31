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
     imagemPerfilIcone:{
      height: 40,
      width: 40,
      borderWidth: 1,
      borderRadius: 50,
      borderColor: 'black',
      margin: 40,
      backgroundColor: 'white', 
      marginLeft: 15 
     },
      tituloMensagensHeader:{
        fontSize:20,
        marginLeft: 35,
        //alignItems: "center",
        paddingTop: 45,
        color: '#000000',
        marginRight: 30
      },
      headerComIcones:{
        flexDirection: "row",
      },
      imagemSinoIcone:{
        height: 35,
        width: 35,
        margin: 2
      },
      imagemAviaoIcone:{
        height: 30,
        width: 30,
        margin: 3,
        marginTop: 5 
        
      },
      backgroundIcone:{
        height: 40,
        width: 40,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        marginRight: 20,
        marginTop:  40 
      },
      imagemMagtechIcone:{
        height: 35,
        width: 35,
        margin: 3,
        marginBottom: 7,
        marginLeft: 2 
      },
      footerComIcones:{
        flexDirection:'row',
        justifyContent: 'space-around',
        
      }
    


    
    
  });