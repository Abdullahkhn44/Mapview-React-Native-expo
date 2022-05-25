import * as React from 'react';
import MapView, { Callout, Circle, Marker, Polygon } from 'react-native-maps';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <MapView
      style={styles.map}
      initialRegion={{
        latitude: 33.80506303338786,
        longitude: 72.35689503807293,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
        <Marker coordinate={{latitude:33.80506303338786,longitude:72.35689503807293}}>
          <Callout><Text>Mehria Town</Text></Callout>
        
        </Marker>

        <Circle center={{
          latitude:33.80506303338786,
          longitude:72.35689503807293}} radius={1200}>
            
        </Circle>
        <Circle center={{
          latitude:33.783682651342296,
          longitude:72.3522898147695}} radius={600}>
            
        </Circle>
        <Marker coordinate={{ latitude:33.783682651342296,
          longitude:72.3522898147695}}><Callout><Text>Comsats Attock</Text></Callout></Marker>
       
      

      </MapView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
