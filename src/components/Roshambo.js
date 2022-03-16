import { faHand, faHandBackFist, faHandScissors, faQuestion } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { View, StyleSheet, Dimensions, Text } from "react-native"
import PressableSquare from "./PressableSquare"

const MOVES = ["scissors", "paper", "rock"];
const MOVES_ICON = [faHand, faHandBackFist, faHandScissors, faQuestion]

const Roshambo = (props) => {

    const [randomMove, setRandomMove] = useState(3);


    const getRandomMove = () => {
        let cpu = Math.round(Math.random() * 2);
        return cpu;
    };

    const game = (playerOneMove) => () => {
        let cpu = getRandomMove();
        let playerTwoMove = MOVES[cpu]
        if (playerOneMove === playerTwoMove) {
            console.log("DRAW")
        } else if (
            (playerOneMove === "rock" && playerTwoMove === "scissors") ||
            (playerOneMove === "scissors" && playerTwoMove === "paper") ||
            (playerOneMove === "paper" && playerTwoMove === "rock")
        ) {
            console.log("YOU WIN")
        } else console.log("PLAYER TWO WIN")

        setRandomMove(cpu)
    }

    return (
        <View style={styles.container}>
            <View style={styles.gameRow}>
                <Text
                    style={props.textStyle}
                >
                    {props.playerTwo}
                </Text>
                <PressableSquare>
                    <FontAwesomeIcon size="4x" icon={MOVES_ICON[randomMove]} color='green' />
                </PressableSquare>
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
                    <PressableSquare
                        onPress={game('paper')}>
                        <FontAwesomeIcon size="4x" icon={faHand} color='pink' />
                    </PressableSquare>
                    <PressableSquare
                        onPress={game('rock')}>
                        <FontAwesomeIcon size="4x" icon={faHandBackFist} color='pink' />
                    </PressableSquare>
                    <PressableSquare
                        onPress={game('scissors')}>
                        <FontAwesomeIcon size="4x" icon={faHandScissors} color='pink' />
                    </PressableSquare>
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
        fontWeight: 'bold'
    }
})

Roshambo.defaultProps = {
    playerTwo: "Computer",
    playerOne: "Player 1",
    textStyle: styles.textStyle
}

export default Roshambo