import { View, StyleSheet } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faMinus, faXmark } from '@fortawesome/free-solid-svg-icons'

const Score = (props) => {

    let result = ''
    let icon = null
    let dimension = ''
    let dimensionIcon = ''

    if (props.dimension === 'lg') {
        dimension = styles.containerScoreLG
        dimensionIcon = '4x'
    } else if (props.dimension === 'md') {
        dimension = styles.containerScoreMD
        dimensionIcon = '2x'
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
    } else
        result = styles.default

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
        width: 100,
        height: 100,
        borderRadius: 100,
        padding: 6,
        backgroundColor: 'black',
    },

    containerScoreMD: {
        width: 50,
        height: 50,
        borderRadius: 100,
        padding: 4,
        backgroundColor: 'black',
    },

    containerScoreSM: {
        width: 20,
        height: 20,
        padding: 2,
        backgroundColor: 'black',
        borderRadius: 100,
    },

    win: {
        flex: 1,
        backgroundColor: "#4CAF50",
        borderRadius: 100,
        justifyContent: 'center',
        boxSizing: 'border-box'

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
    }
})

Score.defaultProps = {
    result: "default",
    dimension: "sm"
}

export default Score