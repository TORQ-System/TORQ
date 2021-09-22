import React, { Component } from 'react';
import  { useState } from 'react';
import { View, Text ,StyleSheet,ScrollView,Image,ImageBackground, Button,TouchableOpacity,Linking} from "react-native";

import { styles } from "../../assets/theme/General";
import PrimaryButton from '../../src/screens/PrimaryButton';
import LinearGradient from 'react-native-linear-gradient';
import database from '@react-native-firebase/database';

import ViewSpesfic from '../../src/screens/ViewSpesfic';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import openMap from 'react-native-open-maps';



var a=false;
 const userList=[];


 var scheme = Platform.OS === 'ios' ? 'maps:' : 'geo:';
class ViewRequest extends  Component{
  
   state ={ userList:[]}
    constructor(props){
        super(props);
        //this.state ={ userList:[]}
       this.subscriber=database()
       .ref('/domRequest')
       .on('value', snapshot => {
         // let userList=[];
          a = snapshot.exists();
           snapshot.forEach(snap =>{
           //   const userList=[];
               userList.push(snap.val());
              console.log('User data: ', snapshot.val());
     
     
       }
      
       );
      
     
       this.setState({userList});
       console.log('User data: ',this.state);
     // this.setState({userList:userList});
   
     });
    }


render (){
    return(
     

 <View style={styles1.container}>
        
        <ImageBackground source={ require('../../assets/BACK.png') } resizeMode="cover" style={styles1.image}>
        <Text  style={styles1.text}>Requests</Text>
        <ScrollView>
        
                <View>
        {
        this.state.userList.map((user,index) => 
        
        
        <View style={styles1.ListStyalee}>
                <View style={styles1.locationbox}>
           
             <Text style={styles1.id} > {user.Fname} {user.Lname} | {user.Request_ID} </Text>
             {/* <PrimaryButton text='View' onPress={() => setShouldShow(!shouldShow)}/> */}
             <TouchableOpacity
            style={styles1.buttonPrimary}
            // onPress={() => setShouldShow(!shouldShow)}
            onPress={() => this.props.navigation.navigate('ViewSpesfic')}
            >
           
            <LinearGradient
                colors={['#0588D0', '#4DBDC2']}
                style={styles1.gradient}
                useAngle={true}
                angle={145}
                angleCenter={{ x: 0.5, y: 0.5 }}>
                {/* <Text style={styles1.textDark}>view</Text> */}
            </LinearGradient>
        </TouchableOpacity>
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
      
      {/* onPress={() =openMap({latitude:user.Latitude,longitude:user.Longitude}) */}
      <TouchableOpacity   onPress={() =>Linking.openURL('https://maps.google.com/?q='+user.Latitude+','+user.Longitude)}  >
      <Text style={styles1.name}>location</Text>
     

         </TouchableOpacity>
      
      <Text style={styles1.id1}>{user.Time}</Text>
            </View>
          
            {/* {shouldShow ? (
          <Image
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
            }}
            style={{ width: 250, height: 250 }}
          />
        ) : null} */}
        
        </View>
   
    )}
    
    <View style={styles.container}>
            { this.renderElement() }
        </View>
             {/* <PrimaryButton text='View' onPress={() => setShouldShow(!shouldShow)}/> */}
           
           </View>
        </ScrollView>
       </ImageBackground>
       </View>
    );
}
renderElement(){
  if( !this.state.userList.length||!a||this.state.userList==null)
     return <Text style={styles1.textnull}>No Requests yet</Text>;
  
}

}




const styles1 = StyleSheet.create({
   ListStyalee: {
      padding:17,
      margin:15,
      marginLeft: 20,
      marginRight:20,
   //  paddingRight:10,
      paddingRight:0,
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
      textnull: {
         marginLeft:15,
        color: "gray",
        fontSize: 30,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
      
        marginTop:20,
        padding:20
       
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
    gradient: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 40,
  },
  buttonPrimary: {
      // marginTop: 10,
      // width: '24%',
      // height: 29,
     
   
      // marginLeft:'auto',
      marginTop: 10,
      width: '3%',
      height: 39,
     
   
      marginLeft:'auto'
  
  },
  textDark: {
      fontSize: 18,
      color: '#FFF',
      fontWeight: 'bold'
  },
    
   }
    )

    export default ViewRequest;
