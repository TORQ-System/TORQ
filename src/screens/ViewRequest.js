import React from 'react';
import { View, Text ,StyleSheet,ScrollView,Image,ImageBackground, Button,TouchableOpacity} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from "../../assets/theme/General";
import PrimaryButton from '../../src/screens/PrimaryButton';



const ViewRequest = () => {
    
    return (
  
        <View style={styles1.container}>
        
        <ImageBackground source={ require('../../assets/BACK.png') } resizeMode="cover" style={styles1.image}>
        <Text  style={styles1.text}>Requests</Text>
        <ScrollView>
            <View style={styles1.ListStyalee}>
                <View style={styles1.locationbox}>
           
             <Text style={styles1.id} > Shahad Alshahrani |113292827</Text>
             <PrimaryButton text='View'/>
         
            </View>
           
            <View style={styles1.locationbox}>
            <Image
     style={{
      marginHorizontal:3,
     
     height:19,
     width:16
   }}
        source={require('../../assets/pinl.png')}
      />
      
      <Text style={styles1.name}>location</Text>
      
      <Text style={styles1.id1}>06:20:12:11</Text>
   
            </View>
          

        </View>
        <View style={styles1.ListStyalee}>
                <View style={styles1.locationbox}>
           
             <Text style={styles1.id} > Shahad Alshahrani |113292827</Text>
             <PrimaryButton text='View'/>
         
            </View>
           
            <View style={styles1.locationbox}>
            <Image
     style={{
      marginHorizontal:3,
     
     height:19,
     width:16
   }}
        source={require('../../assets/pinl.png')}
      />
      
      <Text style={styles1.name}>location</Text>
      
      <Text style={styles1.id1}>06:20:12:11</Text>
   
            </View>
          

        </View>
        <View style={styles1.ListStyalee}>
                <View style={styles1.locationbox}>
           
             <Text style={styles1.id} > Shahad Alshahrani |113292827</Text>
             <PrimaryButton text='View'/>
         
            </View>
           
            <View style={styles1.locationbox}>
            <Image
     style={{
      marginHorizontal:3,
     
     height:19,
     width:16
   }}
        source={require('../../assets/pinl.png')}
      />
      
      <Text style={styles1.name}>location</Text>
      
      <Text style={styles1.id1}>06:20:12:11</Text>
   
            </View>
          

        </View>
        <View style={styles1.ListStyalee}>
                <View style={styles1.locationbox}>
           
             <Text style={styles1.id} > Shahad Alshahrani |113292827</Text>
             <PrimaryButton text='View'/>
         
            </View>
           
            <View style={styles1.locationbox}>
            <Image
     style={{
      marginHorizontal:3,
     
     height:19,
     width:16
   }}
        source={require('../../assets/pinl.png')}
      />
      
      <Text style={styles1.name}>location</Text>
      
      <Text style={styles1.id1}>06:20:12:11</Text>
   
            </View>
          

        </View>
        <View style={styles1.ListStyalee}>
                <View style={styles1.locationbox}>
           
             <Text style={styles1.id} > Shahad Alshahrani |113292827</Text>
             <PrimaryButton text='View'/>
         
            </View>
           
            <View style={styles1.locationbox}>
            <Image
     style={{
      marginHorizontal:3,
     
     height:19,
     width:16
   }}
        source={require('../../assets/pinl.png')}
      />
      
      <Text style={styles1.name}>location</Text>
      
      <Text style={styles1.id1}>06:20:12:11</Text>
   
            </View>
          

        </View>
        <View style={styles1.ListStyalee}>
                <View style={styles1.locationbox}>
           
             <Text style={styles1.id} > Shahad Alshahrani |113292827</Text>
             <PrimaryButton text='View'/>
         
            </View>
           
            <View style={styles1.locationbox}>
            <Image
     style={{
      marginHorizontal:3,
     
     height:19,
     width:16
   }}
        source={require('../../assets/pinl.png')}
      />
      
      <Text style={styles1.name}>location</Text>
      
      <Text style={styles1.id1}>06:20:12:11</Text>
   
            </View>
          

        </View>
        <View style={styles1.ListStyalee}>
                <View style={styles1.locationbox}>
           
             <Text style={styles1.id} > Shahad Alshahrani |113292827</Text>
             <PrimaryButton text='View'/>
         
            </View>
           
            <View style={styles1.locationbox}>
            <Image
     style={{
      marginHorizontal:3,
     
     height:19,
     width:16
   }}
        source={require('../../assets/pinl.png')}
      />
      
      <Text style={styles1.name}>location</Text>
      
      <Text style={styles1.id1}>06:20:12:11</Text>
   
            </View>
          

        </View>
         
       
            </ScrollView>
        </ImageBackground>
      </View>
      
     
    )     

};






export const styles1 = StyleSheet.create({
   ListStyalee: {
      padding:17,
      margin:15,
      marginLeft: 20,
      marginRight:20,
     paddingRight:1,
   
    backgroundColor:"white",
    borderRadius:25,
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
         , fontSize: 17,
         fontWeight:"bold",
         textDecorationLine: 'underline',
       
       // textAlign: "center",
      },
      id:{
        color:"#656262"
       , fontSize:17,
       marginBottom:7,
       
     
    fontWeight: "bold",
      marginTop:10,
    },
    id1:{
      color:"#656262"
     , fontSize:17,
     marginHorizontal:120,
    
     
   
    fontWeight: "bold",
   
  },
    locationbox:{
        flexDirection: "row",
    }, Fbox:{
        flexDirection: "row",
    },
    loc:{
        color:"#919191"
       , fontSize:19,
     
      fontWeight: "bold",
      
    },
    locationbox:{
        flexDirection: "row",
    },
  
    
   }
    )

export default ViewRequest;
