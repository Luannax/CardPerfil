import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import Capa from './assets/fundo.png';
import Foto from './assets/eu.jpg';

export default function App() {
  return (
    <View style={ estilos.container }>
      <Image style={ estilos.fotoTopo } source={Capa} />

      <View style={ estilos.boxDescricao }>
        <Image style={ estilos.fotoPerfil } source={Foto} />
        <Text style={ estilos.titulo }>Luanna Bahia</Text>
        <Text style={ estilos.cargo }>
          Estudante de Ciência da Computação | Desenvolvedora Web e Mobile | HTML | CSS | JAVASCRIPT | PYTHON | REACT | REACT NATIVE | GITHUB | VERCEL | NETFLY | VSCODE | ANDROID STUDIO | WINDOWS
          </Text>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  fotoTopo: {
    flex: 1,
  },

  boxDescricao: {
    flex: 1,
    alignItems: 'center',
  },

  fotoPerfil: {
    marginTop:20,
    marginBottom:20,
    width: 100,
    height: 100,
    borderRadius:50
  },
  titulo: {
    marginBottom:10,
    fontSize: 22,
  },
  cargo: {
    textAlign: 'center',
    marginHorizontal: 15,
    fontSize: 16
  }
});
