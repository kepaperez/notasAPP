import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export const Nota = () => {
  return (
    <View style={styles.notaCtn}>
      <Text style={styles.titulo}>Nombre de la nota 🚀</Text>
      <Text style={styles.fecha}>04/02/2023 - Home</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  notaCtn: {
    backgroundColor: "#313130",
    padding: 15,
    marginVertical: 10,
    borderRadius: 7,
  },
  titulo: {
    fontFamily:'Poppins-ExtraBold',
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 5,
    
  },
  fecha: {
    color: 'white',
  }

})