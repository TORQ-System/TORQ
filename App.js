import React from 'react';
import type { Node } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as geolib from 'geolib';

// 1- here are ALL SRCA centers in riyadh with thier information (name , longitude , latitude).
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
  },
  {
    //munsiyah
    latitude: 24.824786989529542,
    longitude: 46.81655385515806,
  },
  {
    //namar
    latitude: 24.55211787741151,
    longitude: 46.63131015472793,
  },
  {
    //nadwah
    latitude: 24.79054888623931,
    longitude: 46.876853868227386,
  },
  {
    //dar bida
    latitude: 24.567103148393645,
    longitude: 46.7685939682224,
  },
  {
    //bayan
    latitude: 24.88285664307162,
    longitude: 46.85941051240605,
  },
  {
    //Narjis
    latitude: 24.839968700490484,
    longitude: 46.67215439706382,
  },
  {
    //salalm
    latitude: 24.71603727390603,
    longitude: 46.811516483566905,
  },
  {
    //Qaser Alhukum
    latitude: 24.62625068416492,
    longitude: 46.70996480685846,
  }
];

// 2- this array should store all the requests in firebase.
var requests = []

// 3- here we should have the location of the logged-in SRCA center ( here is almalqa's location ).
const center = { latitude: 24.813340812816, longitude: 46.608601997063275, name: "almalqa" };

// 4- stores the request assigned to the logged in center's portal.
var myCentersRequest = [];

// 5- here is the location of the  accident request ( this line should be inside the loop and should be retreived form myCentersRequest[index] )

const accidentLocation = { latitude: 24.812681852154594, longitude: 46.605789041860184 };

// 6- for loop should be here ( to loop through the all the requests and apply the conditions on each of them )

// for (let index = 0; index < requests.length; index++) {

// 7-  here goes the function that will return the nearest SRCA center:
var nearest = geolib.findNearest(accidentLocation, SRCACenters);
// as we mentioned earlier the Accident location should be retireved form the requests[index] but to test our code we hard coded it.

// 8- check if we're the nearest center to request[index].
if ((center.latitude == nearest.latitude) && (center.longitude == nearest.longitude)) {
  myCentersRequest.push(accidentLocation);
}
// } end of for loop.



const App = (): Node => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> I'm {center.name} SRCA center</Text>
      <Text style={styles.text}> I have {myCentersRequest.length} requests</Text>
      <View style={styles.sub}>
        <Text style={styles.text}>The nearest SRCA Center to the accident is: </Text>
        <Text style={styles.text}> nearest SRCA center latitide: {nearest.latitude}</Text>
        <Text style={styles.text}> nearest SRCA center  longitude: {nearest.longitude}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
    marginBottom: 20,
  },
  container: {
    margin: 60,
    marginTop: 100,
  },
  sub: {
    marginTop: 60,
  }

});

export default App;
