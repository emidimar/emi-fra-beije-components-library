import { View, Text, Button, StyleSheet } from 'react-native-web'
import React from 'react'

export default function CustomButton() {
    return (

        <View style={styles.butttonContainer}>
            <Text>Bottone</Text>
            <Button title='Cliccami' color='red' />
        </View>
    )
}

const styles = StyleSheet.create({
    butttonContainer: {
        maxWidth: 200
    }
})