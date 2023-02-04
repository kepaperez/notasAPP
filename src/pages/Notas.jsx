import React from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'
import { Nota } from '../components/Nota'



export default function Notas() {
    return (
        <ScrollView style={styles.container}>
            <Nota/>
            <Nota/>
            <Nota/>
            <Nota/>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#161615',
        padding:15,
    },

})