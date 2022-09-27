import { StyleSheet  } from 'react-native';

const styles = StyleSheet.create({
    mainContent:{
    width:"95%",
    height:"auto",
    marginLeft:"3%",
    marginBottom:15,
    borderRadius:10,
    flexDirection:"row",
    alignItems:"center",
    padding:10,
    backgroundColor:"#000",
  },
  contextLeft:{
      width:"36%",
      height:"100%",
      alignItems:"flex-start"
  },
  boxLogo:{
flexDirection:"row",
alignItems:"center",
  },
  logoBitCoin:{
width:40,
height:40,
marginLeft:2,

  },
  dayCotation:{
fontSize:16,
paddingLeft:21,
color:"#fff",
fontWeight:"bold"
    },
  contextRigth:{
    width:"60%",
    alignItems:"flex-end",
     
  },
  price:{
color:"#fff",
fontSize:18,
fontWeight:"bold",
  },

  
});

 export default styles