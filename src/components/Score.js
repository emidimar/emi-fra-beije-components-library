import { View, Text, Button, StyleSheet } from 'react-native-web'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const Score = (props) => {

    let status = ''
    let icon = ''

    if (props.status === "win") {
        status = styles.win
        icon = <FontAwesomeIcon icon="fa-solid fa-check" />
    } else if (props.status === "lose") {
        status = styles.lose
    } else {
        status = styles.draw
    }

    return (
        <View style={styles.containerScore}>
            <View style={status}>
                <FontAwesomeIcon icon={faCheck} />
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    containerScore: {
        width: 100,
        height: 100,
        margin: 5
    },
    win: {
        flex: 1,
        backgroundColor: "#4CAF50",
        borderRadius: 100,
    },
    lose: {
        flex: 1,
        backgroundColor: '#b80000',
        borderRadius: 100,
    },
    draw: {
        flex: 1,
        backgroundColor: '#ABB8C3',
        borderRadius: 100,
    }
})

Score.defaultProps = {
    status: "win"
}

export default Score