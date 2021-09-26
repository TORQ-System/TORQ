import React, { Component } from 'react';
import  { useState } from 'react';
import { View, Text ,StyleSheet,ScrollView,Image,ImageBackground, Button,TouchableOpacity,Linking} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from "../../assets/theme/General";
import PrimaryButton from '../../src/screens/PrimaryButton';
import LinearGradient from 'react-native-linear-gradient';
import database from '@react-native-firebase/database';
import openMap from 'react-native-open-maps';
import { data } from 'browserslist';
import { createOpenLink } from 'react-native-open-maps';


 const userINFOList=[];
let DOB="";
let Fname=""
let Lname=""
let NID=""

 var scheme = Platform.OS === 'ios' ? 'maps:' : 'geo:';
class ViewSpesfic extends  Component{
  
   state ={userINFOList:[]}
    constructor(props){
        super(props);
    
   
    //console.log("try", this.props.navigation.route.params.data)
    }
    // read(){
    //   const{data}=this.props.route.params
  
  
    //   database().ref('/User').orderByChild('Email').equalTo(""+data).once('value', snapshot => { 
    //      let userINFOList=[];
    //       snapshot.forEach(snap =>{
    //       //   const userList=[];
    //           userINFOList.push(snap.val());
    //        //  console.log('User data: ', snapshot.val());
    //       // let try0=snap.val()
    // //       DOB=try0.DOB
         
    // //  Fname=try0.Fname
    // //  Lname=try0.Lname
    // //  NID=try0.NID
          
    //   }
     
    //   );
     
    
    //   this.setState({userINFOList});
    //  // console.log('User data: ',DOB);
    
    // // this.setState({userList:userList});
    
    // });
    // console.log('User data: ',userINFOList);
    // }


render (){
  const{data}=this.props.route.params
    return(
     

 <View style={styles1.container}>
        
        <ImageBackground source={ require('../../assets/BACK.png') } resizeMode="cover" style={styles1.image}>
        <Text  style={styles1.text}>Shahad's Report</Text>
        <ScrollView>
        
                <View>
                <View style={styles1.ListStyalee}><Text>{data} </Text><Text></Text></View>
              
                

    
  
           
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
      marginLeft: 25,
      marginRight:25,
     paddingRight:10,
   height:500,
    backgroundColor:"white",
    borderRadius:25,
    shadowColor: "blue",
    shadowOffset: {
        width: 0,
        height: 2,
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
         marginLeft:30,
         marginTop:30,
        color: "white",
        fontSize: 30,
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

    export default ViewSpesfic;
