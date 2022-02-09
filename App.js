import React, {useState, useEffect} from 'react';
import {SafeAreaView, Platform, StyleSheet, PermissionsAndroid, Dimensions} from 'react-native';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const {width, height} = Dimensions.get('screen');

export default function App(){
  const [region, setRegion] = useState(null);

  useEffect(() => {
    getMyLocation();
  },[])

  function getMyLocation(){
    Geolocation.getCurrentPosition(info => {
      console.log("Latitude", info.coords.latitude)
      console.log("Longitude", info.coords.longitude)

      setRegion({
        latitude: info.coords.latitude,
        longitude: info.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.421
      })
    }, 
    () => {console.log('Deu algum erro')}, {
      enableHighAccuracy: true,
      timeout: 2000,
    })
  }

  return(
    <SafeAreaView style={styles.container}>
      <MapView
        onMapReady={() => { //quando o mapa for carregado eu quero ir buscar a localização do usuário com permissão
          Platform.OS === 'android' ?
          PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
            .then(() => {
            console.log('Usuário aceitou')
          })
          : ''
        }} 
        region={region}
        zoomEnabled={true}
        minZoomLevel={17}
        showsUserLocation={true}
        loadingEnabled={true}
      style={styles.map}
  />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  map: {
    width: width,
    height: height
  }
})