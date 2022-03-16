import { View, StyleSheet, Dimensions, Text } from "react-native"
import PressableSquare from "./PressableSquare"

const Roshambo = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.gameRow}>
                <Text
                    style={props.textStyle}
                >
                    {props.playerTwo}
                </Text>
                <PressableSquare />
            </View>
            <View style={styles.centralRow}>
                <Text
                    style={props.textStyle}
                >
                    VS
                </Text>
            </View>
            <View style={styles.gameRow}>
                <Text
                    style={props.textStyle}
                >
                    {props.playerOne}
                </Text>

                <View style={styles.choiceRow}>
                    <PressableSquare />
                    <PressableSquare />
                    <PressableSquare />
                </View>

            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    gameRow: {
        height: '40%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: "#8ED1FC",
    },
    centralRow: {
        height: '20%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',

        backgroundColor: "#2D6386"
    },
    choiceRow: {
        marginTop: "4%",
        width: '80%',
        maxWidth: 500,
        flexDirection: "row",
        justifyContent: 'space-around'
    },
    textStyle: {
        fontSize: 40,
        fontWeight: 'bold',
    }
})

Roshambo.defaultProps = {
    playerTwo: "Computer",
    playerOne: "Player 1",
    textStyle: styles.textStyle
}

export default Roshambo