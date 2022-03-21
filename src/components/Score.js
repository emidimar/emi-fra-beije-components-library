import { View, StyleSheet } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faMinus, faXmark } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const Score = (props) => {

    let result = ''
    let icon = null
    let dimension = ''
    let dimensionIcon = ''

    if (props.dimension === 'lg') {
        dimension = styles.containerScoreLG
        dimensionIcon = 'lg'
    } else if (props.dimension === 'md') {
        dimension = styles.containerScoreMD
        dimensionIcon = 'md'
    } else {
        dimension = styles.containerScoreSM
        dimensionIcon = 'sm'
    }

    if (props.result === "win") {
        result = styles.win
        icon = <FontAwesomeIcon size={dimensionIcon} icon={faCheck} />
    } else if (props.result === "lose") {
        result = styles.lose
        icon = <FontAwesomeIcon size={dimensionIcon} icon={faXmark} />
    } else if (props.result === "draw") {
        result = styles.draw
        icon = <FontAwesomeIcon size={dimensionIcon} icon={faMinus} />
    } else {
        result = styles.default
        icon = props.text
    }

    return (
        <View style={dimension}>
            <View style={result}>
                {icon}
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    containerScoreLG: {
        width: 80,
        height: 80,
        borderRadius: 100,
        padding: 6,
        backgroundColor: 'black',
        fontSize: '3em',
        fontWeight: 'bold'
    },

    containerScoreMD: {
        width: 50,
        height: 50,
        borderRadius: 100,
        padding: 4,
        backgroundColor: 'black',
        fontSize: '2em',
        fontWeight: 'bold'
    },

    containerScoreSM: {
        width: 20,
        height: 20,
        padding: 2,
        backgroundColor: 'black',
        borderRadius: 100,
        fontSize: '1em',
        fontWeight: 'bold'
    },

    win: {
        flex: 1,
        backgroundColor: "#4CAF50",
        borderRadius: 100,
        justifyContent: 'center',

    },
    lose: {
        flex: 1,
        backgroundColor: '#b80000',
        borderRadius: 100,
        justifyContent: 'center',
    },

    draw: {
        flex: 1,
        backgroundColor: '#ABB8C3',
        borderRadius: 100,
        justifyContent: 'center',
    },

    default: {
        flex: 1,
        backgroundColor: '#D3D4D4',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

Score.defaultProps = {
    result: "default",
    dimension: "sm"
}

export default Score