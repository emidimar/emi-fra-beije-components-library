import { View, Text, Button, StyleSheet, Pressable, Image } from 'react-native'
import React from 'react'

const PressableSquare = (props) => {

    const onPressHandler = (e) => {
        if (!!props.onPress) {
            props.onPress(e)
        }
    }

    return (
        <Pressable
            style={props.container}
            onPress={onPressHandler}>
            {props.children}
        </Pressable>
    )

}

const styles = StyleSheet.create({
    container: {
        width: 85,
        height: 85,
        backgroundColor: '#02003A',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: 'black',
    }
})

PressableSquare.defaultProps = {
    container: styles.container
}


export default PressableSquare