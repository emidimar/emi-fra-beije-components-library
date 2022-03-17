import { View, StyleSheet, Text } from "react-native"
import ScoreBoard from "./ScoreBoard"

const HighScore = (props) => {

    const showData = () => {
        
    }

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text>{props.title}</Text>
            </View>
            <View style={styles.headerContainer}>
                <View style={styles.usersCol}>
                    <Text>{props.usersHeader}</Text>
                </View>
                <View style={styles.winCol}>
                    <Text>{props.winsHeader}</Text>
                </View>
                {
                    !!props.lastResults &&
                    <View style={styles.lastResultsCol}>
                        <Text>{props.lastResultsHeader}</Text>
                    </View>
                }
            </View>

            <View styles={styles.contentContainer}>
                {props.data.map(showData)}
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
    headerContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    usersCol: {
        flex: 3,
        backgroundColor: '#FF6B6B'
    },
    winCol: {
        flex: 1,
        backgroundColor: "#F7FFF7"
    },
    lastResultsCol: {
        flex: 2,
        backgroundColor: "#FFE66D"
    },
})

HighScore.defaultProps = {
    title: "HIGHSCORE",
    usersHeader: "USERNAME",
    winsHeader: "WINS",
    lastResultsHeader: "LAST RESULTS"
}

export default HighScore