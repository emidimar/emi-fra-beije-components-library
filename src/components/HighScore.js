import { View, StyleSheet, Text, ScrollView } from "react-native"
import ScoreBoard from "./ScoreBoard"
import React from 'react'

const HighScore = (props) => {

    const showData = (index, key) => {
        return (
            <View key={key} style={styles.containerRow}>
                <View style={styles.usersContainer}>
                    <Text style={styles.textRow}>{index.username}</Text>
                </View>
                <View style={styles.winsContainer}>
                    <Text style={styles.textRow}>{index.wins}</Text>
                </View>
                {!!props.lastResults &&
                    <View style={styles.lastResultsContainer}>
                        <ScoreBoard
                            iconWin={props.iconWin}
                            iconLose={props.iconLose}
                            iconDraw={props.iconDraw}
                            lastResult={index.lastResults} />
                    </View>}
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{props.title}</Text>
            </View>
            <View style={styles.headerContainer}>
                <View style={styles.usersCol}>
                    <Text style={styles.textHeader}>{props.usersHeader}</Text>
                </View>
                <View style={styles.winCol}>
                    <Text style={styles.textHeader}>{props.winsHeader}</Text>
                </View>
                {
                    !!props.lastResults &&
                    <View style={styles.lastResultsCol}>
                        <Text style={styles.textHeader}>{props.lastResultsHeader}</Text>
                    </View>
                }
            </View>

            <ScrollView contentContainerStyle={styles.contentContainer}>
                {props.data.map(showData)}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },

    titleContainer: {
        textAlign: "center",
        height: '10%',
        justifyContent: "center"
    },

    title: {
        fontSize: 20,
        fontWeight: "bold"
    },

    headerContainer: {
        flexDirection: 'row',
        height: '10%',
        textAlign: "center",
        borderBottomWidth: 2,
        borderBottomColor: 'black',
        borderTopWidth: 2,
        borderTopColor: 'black'
    },
    usersCol: {
        flex: 2,
        backgroundColor: '#FF6B6B',
        justifyContent: "center",
        borderRightWidth: 2,
        borderRightColor: 'black',
        borderLeftWidth: 2,
        borderLeftColor: 'black'
    },
    winCol: {
        flex: 1,
        backgroundColor: "#F7FFF7",
        justifyContent: "center",
        borderRightWidth: 2,
        borderRightColor: 'black'
    },
    lastResultsCol: {
        flex: 2,
        backgroundColor: "#FFE66D",
        justifyContent: "center",
        borderRightWidth: 2,
        borderRightColor: 'black'
    },

    contentContainer: {
        height: '80%',
        flexDirection: 'column',
    },

    containerRow: {
        flexDirection: 'row',
        height: "5%",
        textAlign: 'center',
        justifyContent: "center",
        borderBottomWidth: 2,
        borderBottomColor: 'black',
        borderRightWidth: 2,
        borderRightColor: 'black',
        borderLeftWidth: 2,
        borderLeftColor: 'black'
    },


    usersContainer: {
        flex: 2,
        justifyContent: "center"

    },


    winsContainer: {
        flex: 1,
        justifyContent: "center"
    },


    lastResultsContainer: {
        flex: 2,
        justifyContent: "center"
    },

    textHeader: {
        fontSize: 20,
        fontWeight: "bold"
    },

    textRow: {
        fontSize: 18,
        fontWeight: "bold"
    }
})

HighScore.defaultProps = {
    title: "HIGHSCORE",
    usersHeader: "USERNAME",
    winsHeader: "WINS",
    lastResultsHeader: "LAST RESULTS"
}

export default HighScore