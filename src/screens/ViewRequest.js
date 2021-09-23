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
import * as geolib from 'geolib';

var a=false;
 const RequestList=[];
 // here we should have the location of the logged-in SRCA center (longitude and latitude) but we should have it from the login screen but for the sake of the logic we'll hard code it here ( we're assuming that we're malqa's SRCA center )
const center = { latitude: 24.813340812816, longitude: 46.608601997063275, };
//const accidentLocation={};
const myCentersRequest = [];
var nearest;

 var scheme = Platform.OS === 'ios' ? 'maps:' : 'geo:';
class ViewRequest extends  Component{
  
   state ={ RequestList:[]}
    constructor(props){
        super(props);
        //this.state ={ RequestList:[]}
       this.subscriber=database()
       .ref('/domRequest')
       .on('value', snapshot => {
         // let RequestList=[];
          a = snapshot.exists();
           snapshot.forEach(snap =>{
           //   const RequestList=[];
               RequestList.push(snap.val());
          //    console.log('User data: ', snapshot.val());
     
     
       }
      
       );
      
     
       this.setState({RequestList});
      // console.log('User data: ',this.state);
     // this.setState({RequestList:RequestList});
     this.state.RequestList.map((request, key) => {
    
      const accidentLocation = { latitude: request.Latitude, longitude: request.Longitude };
      // console.log("this req",accidentLocation);
      nearest = geolib.findNearest(accidentLocation, [
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
        },
        {
          // 21-munsiyah
          name: "munsiyah",
          latitude: 24.824786989529542,
          longitude: 46.81655385515806,
        },
        {
          // 22-namar
          name: "namar",
          latitude: 24.55211787741151,
          longitude: 46.63131015472793,
        },
        {
          // 23-nadwah
          name: "nadwah",
          latitude: 24.79054888623931,
          longitude: 46.876853868227386,
        },
        {
          // 24-dar bida
          name: "darBida",
          latitude: 24.567103148393645,
          longitude: 46.7685939682224,
        },
        {
          // 25-bayan
          name: "bayan",
          latitude: 24.88285664307162,
          longitude: 46.85941051240605,
        },
        {
          // 26-Narjis
          name: "Narjis",
          latitude: 24.839968700490484,
          longitude: 46.67215439706382,
        },
        {
          // 27-salalm
          name: "salalm",
          latitude: 24.71603727390603,
          longitude: 46.811516483566905,
        },
        {
          // 28-qaserAlhukum
          name: "qaserAlhukum",
          latitude: 24.62625068416492,
          longitude: 46.70996480685846,
        }
      ]);
     
      // check if we're the nearest center to request[i]
      if (nearest == center) {
        myCentersRequest.push(request)
      
     }
     
     })
    console.log("final",myCentersRequest);
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
        this.state.RequestList.map((user,index) => 
        
        
        <View style={styles1.ListStyalee}key={index}>
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
  if( !this.state.RequestList.length||!a||this.state.RequestList==null)
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
