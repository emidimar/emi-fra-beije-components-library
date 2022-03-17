import { faHand, faHandBackFist, faHandScissors, faQuestion } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useState } from "react"
import { View, StyleSheet, Text } from "react-native"
import PressableSquare from "./PressableSquare"

const MOVES = ["paper", "rock", "scissors"];
const MOVES_ICON = [faHand, faHandBackFist, faHandScissors, faQuestion]

const Roshambo = (props) => {

    const [randomMove, setRandomMove] = useState(3);
    const [colors, setColors] = useState(['#FFE66D', "#FFE66D", "#FFE66D"])
    const [isWaiting, setWait] = useState(false)

    const getRandomMove = () => {
        let cpu = Math.round(Math.random() * 2);
        return cpu;
    };

    const changeKeyDisplay = (id, isWaiting) => {
        let newColors = colors.map((color, key) => {
            if (key === id || id === true)
                return '#FFE66D'
            else {
                return "#D6D9D6"
            }
        })
        setColors(newColors)
        setWait(isWaiting)
    }

    const timer = (ms) => new Promise(res => setTimeout(res, ms))

    const game = (moveId) => async () => {
        if (!isWaiting) {
            changeKeyDisplay(moveId, true)

            //Choose Moves
            let cpu = getRandomMove();
            let playerTwoMove = MOVES[cpu]
            let playerOneMove = MOVES[moveId]

            // Animation of CPU
            for (var i = 0; i < 25; i++) {

                let random = Math.floor((Math.random() * 2));
                setRandomMove(random)
                if (i < 20) {
                    await timer(100);
                } else {
                    await timer(300)
                }
            }

            if (playerOneMove === playerTwoMove) {
                if (!!props.onWin)
                    props.onDraw(playerOneMove, playerTwoMove)
            } else if (
                (playerOneMove === "rock" && playerTwoMove === "scissors") ||
                (playerOneMove === "scissors" && playerTwoMove === "paper") ||
                (playerOneMove === "paper" && playerTwoMove === "rock")
            ) {
                if (!!props.onWin)
                    props.onWin(playerOneMove, playerTwoMove)
            } else {
                if (!!props.onWin)
                    props.onLose(playerOneMove, playerTwoMove)
            }

            changeKeyDisplay(true, false)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.gameRow}>
                <Text
                    style={props.textStyle}
                >
                    {props.playerTwo}
                </Text>
                <View style={styles.choiceRow}>
                    <PressableSquare>
                        <FontAwesomeIcon size="4x" icon={MOVES_ICON[randomMove]} color="#FFE66D" />
                    </PressableSquare>
                </View>
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
                        onPress={game(0)}>
                        <FontAwesomeIcon size="4x" icon={faHand} color={colors[0]} />
                    </PressableSquare>
                    <PressableSquare
                        onPress={game(1)}>
                        <FontAwesomeIcon size="4x" icon={faHandBackFist} color={colors[1]} />
                    </PressableSquare>
                    <PressableSquare
                        onPress={game(2)}>
                        <FontAwesomeIcon size="4x" icon={faHandScissors} color={colors[2]} />
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
        backgroundColor: "#F7FFF7",
        justifyContent: 'center',
    },
    centralRow: {
        height: '20%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#FF6B6B'
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