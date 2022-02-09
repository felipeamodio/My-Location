import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

export default function App(){
  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Meu Mapa</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    marginTop: 30,
    fontSize: 30,
    color: '#A9A9A9',
    fontWeight: 'bold'
  }
})