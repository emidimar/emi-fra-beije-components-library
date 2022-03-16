import { View, Text, Button, StyleSheet, Pressable, Image } from 'react-native-web'
import React from 'react'

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 100,
        backgroundColor: 'grey'
    }
})

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
                <Image source={props.imgUrl}/>
        </Pressable>
    )

}

PressableSquare.defaultProps = {
    container: styles.container
}


export default PressableSquare