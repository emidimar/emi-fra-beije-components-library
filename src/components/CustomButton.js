import { View, Button, StyleSheet } from 'react-native'
import React from 'react'

const styles = StyleSheet.create({
    buttonContainer: {
        maxWidth: 200,
        margin: 5
    }
})

const CustomButton = (props) => {

    const onPressHandler = (e) => {
            if(!!props.onPress) {
                props.onPress(e)
            }
    }

    return (
        <View style={props.buttonContainer}>
            <Button 
            title={props.title} 
            color={props.color}
            onPress={onPressHandler} />
        </View>
    )
}

CustomButton.defaultProps = {
    buttonContainer : styles.buttonContainer,
    title: "button"
}

export default CustomButton