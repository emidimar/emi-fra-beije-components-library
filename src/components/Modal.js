import { faXmark } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { View } from 'react-native'

const Modal = () => {
    return (
        <View>
            <View>
                {props.text}
                <FontAwesomeIcon icon={faXmark} />
            </View>
        </View>
    )
}

export default Modal