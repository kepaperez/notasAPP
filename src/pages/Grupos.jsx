import React from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'
import { Grupo } from '../components/Grupo'

export default function Grupos() {
    return (
        <ScrollView style={styles.container}>
            <Grupo/>
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