import React from 'react';
import { View, Text ,StyleSheet,ScrollView,Image} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from "../../assets/theme/General";



const ViewRequest = () => {
    return (
       
        <ScrollView >
           <View style={{ backgroundColor:'black',justifyContent:"center",
        paddingLeft:110}} >
               
               <Image
               style={{
                   justifyContent:'center',
                resizeMode: "contain",
                 height:110,
                 width:170
               }}
                 source={require('../../assets/Logo.png')}
               /></View>
      <View  style={{ backgroundColor: 'black'}}>
        <View  style={styles1.ListStyalee}>
      
     
               <View  >
              
               <Image
              style={{
               
              height:60,
              width:60
            }}
                 source={require('../../assets/user1.png')}
               /></View>
            <View>
            <Text  style={styles1.tex1}>  Name: Ahmed AlAhmed</Text>
            <Text  style={styles1.tex1}>  ID:1190289382</Text>
            
              
               <Text style={styles1.tex1}>  latitude:24.752631023245485</Text>
            <Text style={styles1.tex1}>  longitude: 46.721276215971216</Text>
            
             </View> 
             <View style={styles1.circle} ><Text style={styles1.tex1}>  1</Text></View>
        </View> 
        <View  style={styles1.ListStyalee}>
      
      
      <View  >
     
      <Image
     style={{
      
     height:60,
     width:60
   }}
        source={require('../../assets/user1.png')}
      /></View>
   <View>
   <Text  style={styles1.tex1}>  Name: Ahmed AlAhmed</Text>
   <Text  style={styles1.tex1}>  ID:1190289382</Text>
   
     
      <Text style={styles1.tex1}>  latitude:24.752631023245485</Text>
   <Text style={styles1.tex1}>  longitude: 46.721276215971216</Text>
   
    </View> 
    <View style={styles1.circle} ><Text style={styles1.tex1}>  2</Text></View>

</View>

<View  style={styles1.ListStyalee}>
      
      
      <View  >
     
      <Image
     style={{
      
     height:60,
     width:60
   }}
        source={require('../../assets/user1.png')}
      /></View>
   <View>
   <Text  style={styles1.tex1}>  Name: Ahmed AlAhmed</Text>
   <Text  style={styles1.tex1}>  ID:1190289382</Text>
   
     
      <Text style={styles1.tex1}>  latitude:24.752631023245485</Text>
   <Text style={styles1.tex1}>  longitude: 46.721276215971216</Text>
   
    </View> 
    <View style={styles1.circle} ><Text style={styles1.tex1}>  3</Text></View>

</View>

<View  style={styles1.ListStyalee}>
      
      
      <View  >
     
      <Image
     style={{
      
     height:60,
     width:60
   }}
        source={require('../../assets/user1.png')}
      /></View>
   <View>
   <Text  style={styles1.tex1}>  Name: Ahmed AlAhmed</Text>
   <Text  style={styles1.tex1}>  ID:1190289382</Text>
   
     
      <Text style={styles1.tex1}>  latitude:24.752631023245485</Text>
   <Text style={styles1.tex1}>  longitude: 46.721276215971216</Text>
   
    </View> 
    <View style={styles1.circle} ><Text style={styles1.tex1}>  4</Text></View>

</View>
<View  style={styles1.ListStyalee}>
      
      
      <View  >
     
      <Image
     style={{
      
     height:60,
     width:60
   }}
        source={require('../../assets/user1.png')}
      /></View>
   <View>
   <Text  style={styles1.tex1}>  Name: Ahmed AlAhmed</Text>
   <Text  style={styles1.tex1}>  ID:1190289382</Text>
   
     
      <Text style={styles1.tex1}>  latitude:24.752631023245485</Text>
   <Text style={styles1.tex1}>  longitude: 46.721276215971216</Text>
   
    </View> 
    <View style={styles1.circle} ><Text style={styles1.tex1}>  5</Text></View>

</View>
<View  style={styles1.ListStyalee}>
      
      
      <View  >
     
      <Image
     style={{
      
     height:60,
     width:60
   }}
        source={require('../../assets/user1.png')}
      /></View>
   <View>
   <Text  style={styles1.tex1}>  Name:Ahmed AlAhmed</Text>
   <Text  style={styles1.tex1}>  ID:1190289382</Text>
   
     
      <Text style={styles1.tex1}>  latitude:24.752631023245485</Text>
   <Text style={styles1.tex1}>  longitude: 46.721276215971216</Text>
   
    </View> 
    <View style={styles1.circle} ><Text style={styles1.tex1}>  6</Text></View>

</View>
</View>
        </ScrollView>
    );

};


export const styles1 = StyleSheet.create({
   ListStyalee: {
      padding:15,
      margin:9,
      marginLeft: 19,
      marginRight:19,
      flex: 1, flexDirection: 'row',
    backgroundColor:'#555353',
    borderRadius:8,
    color:'blue',
    shadowColor: "white",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 1,
    shadowRadius:14,
    
    elevation: 15,
    
    }
    
    ,
    tinyLogo: {
        width:300,
        height: 300,
      },circle: {
        width: 30,
        height: 30,
        color:'#0789D0',
        borderRadius: 100 / 2,
    marginLeft:2,
    justifyContent:"flex-end",
        borderWidth:3,
        borderColor:'#0789D0'
        ,textAlign:'center'
      },
      tex1:{
          color:'white'
      },
      text1:{
        color:'#3EA9E4'
    }
   }
    )

export default ViewRequest;
