import React, { Component } from 'react';
import  { useState } from 'react';
import { View, Text ,StyleSheet,ScrollView,Image,ImageBackground, Button,TouchableOpacity,Linking} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from "../../assets/theme/General";
import PrimaryButton from '../../src/screens/PrimaryButton';
import LinearGradient from 'react-native-linear-gradient';
import database from '@react-native-firebase/database';
import { elemIndices } from 'prelude-ls';
import { element } from 'prop-types';
import openMap from 'react-native-open-maps';
import { data } from 'browserslist';
import { createOpenLink } from 'react-native-open-maps';


 const userList=[];


 var scheme = Platform.OS === 'ios' ? 'maps:' : 'geo:';
class database1 extends  Component{
  
   state ={ userList:[]}
    constructor(props){
        super(props);
        //this.state ={ userList:[]}
       this.subscriber=database()
       .ref('/domRequest')
       .on('value', snapshot => {
          let userList=[];
           snapshot.forEach(snap =>{
           //   const userList=[];
               userList.push(snap.val());
              console.log('User data: ', snapshot.val());
     
     
       }
      
       );
      
     
       this.setState({userList});
       console.log('User data: ',userList);
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
        {this.state.userList.map((user,index) => <View style={styles1.ListStyalee}>
                <View style={styles1.locationbox}>
           
             <Text style={styles1.id} > {user.Fname} {user.Lname} | {user.Request_ID} </Text>
             {/* <PrimaryButton text='View' onPress={() => setShouldShow(!shouldShow)}/> */}
             <TouchableOpacity
            style={styles1.buttonPrimary}
            // onPress={() => setShouldShow(!shouldShow)}
            >
           
            <LinearGradient
                colors={['#0588D0', '#4DBDC2']}
                style={styles1.gradient}
                useAngle={true}
                angle={145}
                angleCenter={{ x: 0.5, y: 0.5 }}>
                <Text style={styles1.textDark}>view</Text>
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
    
  
             {/* <PrimaryButton text='View' onPress={() => setShouldShow(!shouldShow)}/> */}
           
           </View>
        </ScrollView>
       </ImageBackground>
       </View>
    );
}}




const styles1 = StyleSheet.create({
   ListStyalee: {
      padding:17,
      margin:15,
      marginLeft: 20,
      marginRight:20,
     paddingRight:10,
   
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
    gradient: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 40,
  },
  buttonPrimary: {
      marginTop: 10,
      width: '18%',
      height: 24,
      //marginHorizontal:2,
      marginLeft:90
    
  },
  textDark: {
      fontSize: 18,
      color: '#FFF',
      fontWeight: 'bold'
  },
    
   }
    )

    export default database1;
