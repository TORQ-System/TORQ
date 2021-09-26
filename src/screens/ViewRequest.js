import React, { Component } from 'react';
import  { useState } from 'react';
import { View, Text ,StyleSheet,ScrollView,Image,ImageBackground, Button,TouchableOpacity,Linking,RefreshControl} from "react-native";

import { styles } from "../../assets/theme/General";
import PrimaryButton from '../../src/screens/PrimaryButton';
import LinearGradient from 'react-native-linear-gradient';
import database from '@react-native-firebase/database';

import ViewSpesfic from '../../src/screens/ViewSpesfic';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import openMap from 'react-native-open-maps';
import * as geolib from 'geolib';
let try1=""
let try2=""


const SRCACenters = [
  {
    // 1-maseef
    name: "maseef",
    latitude: 24.766719982385496,
    longitude: 46.67534595473277,
  },
  {
    // 2-malqa
    name: "malqa",
    latitude: 24.813340812816,
    longitude: 46.608601997063275,
  },
  {
    // 3-khaldiya
    name: "khaldiya",
    latitude: 24.619958154092846,
    longitude: 46.75525738171758,
  },
  {
    // 4-king fahad
    name: "kingFahad",
    latitude: 24.739310634888415,
    longitude: 46.674034268226166,
  },
  {
    // 5-uraubah
    name: "uraubah",
    latitude: 24.70462364665244,
    longitude: 46.64807129759366,
  },
  {
    // 6-nafel
    name: "nafel",
    latitude: 24.78216370748611,
    longitude: 46.680739075994765,
  },
  {
    // 7-sulaimaniyah
    name: "sulaimaniyah",
    latitude: 24.710575659754106,
    longitude: 46.69030329759365,
  },
  {
    // 8-rawdah
    name: "rawdah",
    latitude: 24.739990461910555,
    longitude: 46.75482089759365,
  },
  {
    // 9-king faisal
    name: "kingFaisal",
    latitude: 24.758385968298718,
    longitude: 46.77954013417631,
  },
  {
    // 10-Nahdah
    name: "Nahdah",
    latitude: 24.764932864314947,
    longitude: 46.824687073212694,
  },
  {
    // 11-Ishbeliyah
    name: "Ishbeliyah",
    latitude: 24.79760402644183,
    longitude: 46.7870465262868,
  },
  {
    // 12-Diriyah<3<3
    name: "Diriyah",
    latitude: 24.751311059443832,
    longitude: 46.56843443622849,
  },
  {
    // 13-Irqah
    name: "Irqah",
    latitude: 24.685478009425,
    longitude: 46.588807536228494,
  },
  {
    // 14-rabwah
    name: "rabwah",
    latitude: 24.691632342324862,
    longitude: 46.7644165111836,
  },
  {
    // 15-dhbab
    name: "dhbab",
    latitude: 24.663302422873645,
    longitude: 46.71039090521693,
  },
  {
    // 16-laban
    name: "laban",
    latitude: 24.65519378984205,
    longitude: 46.587670368287135,
  },
  {
    // 17-naseem
    name: "naseem",
    latitude: 24.751125038650233,
    longitude: 46.82915955833446,
  },
  {
    // 18-rimal
    name: "rimal",
    latitude: 24.835299420469504,
    longitude: 46.80158764475565,
  },
  {
    // 19-khaleej
    name: "khaleej",
    latitude: 24.786104788767688,
    longitude: 46.80613437245616,
  },
  {
    // 20-twaiq
    name: "twaiq",
    latitude: 24.585265317480754,
    longitude: 46.547105141719804,
  }
];

var a=false;
 const RequestList=[];
 // here we should have the location of the logged-in SRCA center (longitude and latitude) but we should have it from the login screen but for the sake of the logic we'll hard code it here ( we're assuming that we're malqa's SRCA center )
const center = { latitude:24.813340812816,longitude:46.608601997063275};
//const accidentLocation={};
const myCentersRequest = [];
var nearest;

 var scheme = Platform.OS === 'ios' ? 'maps:' : 'geo:';
class ViewRequest extends  Component{
  
   state ={ RequestList:[],test:[]
  
  
  }
  
    constructor(props){
        super(props);
     

        
        //this.state ={ RequestList:[]}
       this.subscriber=database()
       .ref('/domRequest')
       .on('value', snapshot => {
          let RequestList=[];
          a = snapshot.exists();
           snapshot.forEach(snap =>{
           //   const RequestList=[];
               RequestList.push(snap.val());
              // let test=snap.val();
             // console.log('User data: ', test.Fname);
     
       }
      
       );
      
     
       this.setState({RequestList});
       
      // console.log('User data: ',this.state);
  
     this.state.RequestList.map((request, key) => {
    
      const accidentLocation = { latitude: request.Latitude, longitude: request.Longitude };
     
     
       nearest = geolib.findNearest(accidentLocation, SRCACenters);
 
      // check if we're the nearest center to request[i]
      if ((center.latitude != nearest.latitude) && (center.longitude != nearest.longitude)) {
        this.setState({
          RequestList: this.state.RequestList.filter(item => item != request)
        })
       // myCentersRequest.push(request);
      }
      
     
     })
     this.setState({myCentersRequest});
 
      });
    }
    
render (){
    return(
    

 <View style={styles1.container}>
        
        <ImageBackground source={ require('../../assets/BACK.png') } resizeMode="cover" style={styles1.image}>
        <Text  style={styles1.text}>Requests</Text>
        <ScrollView
          refreshControl={
            <RefreshControl
             refreshing={this.state.refreshing}
             // onRefresh={onRefresh}
            />}
        >
       
                <View>
        {
          
        this.state.RequestList.map((user,index) => 

      
        
        <View style={styles1.ListStyalee}key={index}>
          <View> 
 {
 
  }</View>
 
                <View style={styles1.locationbox}>
                <Image
     style={{
      marginHorizontal:3,
    // marginBottom:15,
    marginTop:10,
     height:20,
     width:20
   }}
        source={require('../../assets/clockk.png')}
      />
                <Text style={styles1.id} >   {user.Time} , {user.Date} <Text style={styles1.id} >| {user.Request_ID}</Text> </Text>
             {/* <Text style={styles1.id} > {user.Fname} {user.Lname} | {user.Request_ID} </Text> */}
             {/* <PrimaryButton text='View' onPress={() => setShouldShow(!shouldShow)}/> */}
             <TouchableOpacity
            style={styles1.buttonPrimary}
            // onPress={() => setShouldShow(!shouldShow)}
            onPress={() => this.props.navigation.navigate('ViewSpesfic',{data:user.Email})}
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
      marginHorizontal:2,
     
     height:19,
     width:16
   }}
        source={require('../../assets/pinl.png')}
      />
      
      {/* onPress={() =openMap({latitude:user.Latitude,longitude:user.Longitude}) */}
      <TouchableOpacity   onPress={() =>Linking.openURL('https://maps.google.com/?q='+user.Latitude+','+user.Longitude)}  >
      <Text style={styles1.name}>location</Text>
     

         </TouchableOpacity>
      
      {/* <Text style={styles1.id1}>{user.Time}</Text> */}
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
  if( !this.state.RequestList.length||!a||this.state.RequestList==null)
     return <Text style={styles1.textnull}>No Requests yet</Text>;
  
}
spesficuser(data){ 
 // this.state={test:[]}  
 // console.log('User data: ', data);
  database().ref('/User').orderByChild('Email').equalTo(data).on('value', snapshot => {
    //console.log('find equal: ', snapshot);

    let test=[];
// console.log('User data: ', snapshot.val())
    snapshot.forEach(snap =>{
// console.log('User data: ', snap.val())
//test.push(snap.val());
let try0=snap.val()
 let try1=try0.Fname
 try2=try0.Lname

      // console.log('User data: ', try1, try2);
        return <Text>{try0.Lname}</Text>;
})})
//this.setState({test})
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
      marginHorizontal:10,
          color:"#50A9DB"
         , fontSize: 17,
         fontWeight:"bold",
         textDecorationLine: 'underline',
       
       // textAlign: "center",
      },
      name1:{
      marginTop:6,
        color:"#50A9DB"
       , fontSize: 17,
       fontWeight:"bold",
      // textDecorationLine: 'underline',
     
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
