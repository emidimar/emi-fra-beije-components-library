import { View, StyleSheet } from 'react-native'
import Score from './Score'
import React from 'react'

const ScoreBoard = (props) => {

    let customResult = Array.from(Array(props.resultsNumber).keys())

    const showCustomResult = (element, key) => {
        return (
            <Score
                key={key}
                dimension={props.dimension}
            />
        )
    }

    const showLastResult = (element, key) => {
        return (
            <Score
                key={key}
                dimension={props.dimension}
                result={element}
            />
        )
    }

    return (
        <View style={styles.scoreContainer}>
            {!!props.lastResult ? props.lastResult.map(showLastResult) : customResult.map(showCustomResult)}
        </View>
    )
}

const styles = StyleSheet.create({
    scoreContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})

ScoreBoard.defaultProps = {
    resultsNumber: 1,
    dimension: "sm"
}

export default ScoreBoard