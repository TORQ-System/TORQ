import React from 'react';
import { View, Text ,StyleSheet,ScrollView,Image,ImageBackground, Button} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from "../../assets/theme/General";



const ViewRequest = () => {
    
    return (
        
     
        
       
        
        <View style={styles1.container}>
        
        <ImageBackground source={ require('../../assets/BACK.png') } resizeMode="cover" style={styles1.image}>
        <Text  style={styles1.text}>Requests</Text>
        <ScrollView>
            <View style={styles1.ListStyalee}>
                <View style={styles1.locationbox}>
           
             <Text style={styles1.id} > Shahad Alshahrani |113292827</Text>
            
           <Button style={styles1.viewbutten} title="View Request"/>
            </View>
           
            <View style={styles1.locationbox}>
            <Image
     style={{
      marginHorizontal:3,
     
     height:16,
     width:16
   }}
        source={require('../../assets/pinl.png')}
      />
      
      <Text style={styles1.name}>location</Text>
      <Text style={styles1.id1}>06:20:12:11</Text>
   
            </View>
        </View>
            <View style={styles1.ListStyalee}>
           <View style={styles1.Fbox}>
            <Text style={styles1.name} >Ahmed Alahmed</Text>
            <View style={styles1.circle}><Text>2</Text></View>
            </View>
            

                        <View style={styles1.locationbox}>
            <Image
     style={{
      marginHorizontal:10,
      marginTop:10,
     height:20,
     width:20
   }}
        source={require('../../assets/id.png')}
      />
      <View>
      <Text style={styles1.id} >   
                          ID:113292827</Text>
   </View>
            </View>
            <View style={styles1.locationbox}>
            <Image
     style={{
      marginHorizontal:10,
      marginTop:10,
     height:18,
     width:18
   }}
        source={require('../../assets/pinn.png')}
      />
      <View>
      <Text style={styles1.loc}> 24.752631023245485 </Text>
   <Text style={styles1.loc}>  46.721276215971216</Text>
   </View>
            </View>
            </View>
         
       
            </ScrollView>
        </ImageBackground>
      </View>
      
     
    )     

};






export const styles1 = StyleSheet.create({
   ListStyalee: {
      padding:15,
      margin:15,
      marginLeft: 20,
      marginRight:20,
     paddingRight:1,
   
    backgroundColor:"white",
    borderRadius:8,
    shadowColor: "blue",
    shadowOffset: {
        width: 0,
        height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 11,
    
    elevation: 9,
    
    },ListStyalee1: {
        padding:10,
        margin:15,
        marginLeft: 20,
        marginRight:20,
      marginTop:100,
     
      backgroundColor:"white",
      borderRadius:8,
      shadowColor: "blue",
      shadowOffset: {
          width: 0,
          height: 4,
      },
      shadowOpacity: 0.32,
      shadowRadius: 11,
      
      elevation: 9,
      
      }
    
    ,  container: {
        flex: 1,
       
      },
      image: {
        flex: 1,
        
        
      },
   
      text: {
         marginLeft:15,
        color: "white",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        //textAlign: "center",
       
      },
      name:{
      
          color:"#50A9DB"
         , fontSize: 15,
         fontWeight:"bold"
     
       
       // textAlign: "center",
      },
      id:{
        color:"gray"
       , fontSize:16,
       marginBottom:7,
       
     
    fontWeight: "bold",
      marginTop:10,
    },
    id1:{
      color:"gray"
     , fontSize:14,
     marginHorizontal:130,
    
     
   
    fontWeight: "bold",
   
  },
    locationbox:{
        flexDirection: "row",
    }, Fbox:{
        flexDirection: "row",
    },
    loc:{
        color:"#919191"
       , fontSize:15,
     
      fontWeight: "bold",
      
    },
    locationbox:{
        flexDirection: "row",
    },
    circle: {
        width: 25,
        height: 25,
        borderColor:"#50A9DB",
        borderRadius: 100 / 2,
        borderWidth:2,
        marginHorizontal:150
       , paddingLeft:5,
      },
      viewbutten:{
        marginHorizontal:9,
        borderRadius:7,
        backgroundColor:"#50A9DB",
        color:"white"

      }
   }
    )

export default ViewRequest;
