import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { View, StyleSheet, Pressable, Text } from 'react-native'

const Modal = (props) => {

    const onPress = () => {
        props.pressCallback();
    }

    return (
        <View style={styles.modalContainer}>
            <Pressable style={styles.iconContainer} onPress={onPress}>
                <FontAwesomeIcon icon={faXmark} size="5x" color='red' />
            </Pressable>
            <View style={styles.childContainer}>
                {props.children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    modalContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.575)',
        width: '100vw',
        height: '100vh',
        zIndex: 1
    },

    iconContainer: {
        position: 'absolute',
        top: 0,
        right: 20
    },

    childContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})

Modal.defaultProps = {
    children: <Text>EXAMPLE</Text>
}


export default Modal