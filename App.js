import React from 'react';
import type { Node } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as geolib from 'geolib';

// ----------- Start of Nearest SRCA Center Logic --------------------- 

// here we should have the location of the logged-in SRCA center (longitude and latitude) but we should have it from the login screen but for the sake of the logic we'll hard code it here ( we're assuming that we're malqa's SRCA center )
const center = { latitude: 24.813340812816, longitude: 46.608601997063275, };

// from firebase (shahad) this array should store all the requests in firebase.
var requests = []

// stores the request assigned to the logged in center's portal.
var myCentersRequest = [];

// for loop should be here ( to loop through the all the requests)

// here is the location of the  accident request ( should be retrieved from firebase and loop through the requests )
const accidentLocation = { latitude: 24.844351675476698, longitude: 46.810270618115474 };

// here goes the function that will return the nearest SRCA center:
var nearest = geolib.findNearest(accidentLocation, [
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
]);

// check if we're the nearest center to request[i]
if (nearest == center) {
  myCentersRequest.append(accidentLocation)
}

//end of for loop

// ----------- End of Nearest SRCA Center Logic --------------------- 

const App = (): Node => {
  return (
    <View>
      <Text> The request f</Text>
      <Text style={styles.text}> latitide: {nearest.latitude}</Text>
      <Text style={styles.text}> longitude: {nearest.longitude}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
    margin: 60,
  },
});

export default App;
