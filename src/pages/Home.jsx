import React from 'react'
import { ScrollView, Text, View, StyleSheet,TextInput } from 'react-native'
import TopTabNavigation from '../navigation/TopTabNavigation'

export const Home = () => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.buscadorCtn}>
                    <TextInput
                        style={styles.input}
                       // onChangeText={onChangeNumber}
                        //value={number}
                        placeholder="Buscador"
                        placeholderTextColor="white" 
                    />
                </View>
                <TopTabNavigation />
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#161615',
    },

    buscadorCtn: {
        justifyContent: 'center',
        padding: 15,
    },
    input: {
        height: 40,
        margin: 12,
        padding: 10,
        borderRadius:7,
        backgroundColor:'#313130',
    },
})