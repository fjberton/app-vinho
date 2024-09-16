import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';

const image = {uri: '../../assets/capa.jpg'};

const TelaInicial = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover"  style={styles.image}>
      <Text style={styles.text}>Adega Preferida</Text>
      <Text style={styles.subtitulo}>Aqui você encontra os melhores e mais saborosos vinhos.</Text>
    </ImageBackground>
  </View>
);

export default TelaInicial;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  subtitulo:{
    color: 'white',
    fontSize: 20,
    lineHeight: 44,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});