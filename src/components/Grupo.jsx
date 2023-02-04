import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export const Grupo = () => {
  return (
    <View style={styles.notaCtn}>
      <Text style={styles.titulo}>Nombre de grupo 🏠</Text>
      <Text style={styles.fecha}>12 notas</Text>
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
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  fecha: {
    color: 'white',
  }

})