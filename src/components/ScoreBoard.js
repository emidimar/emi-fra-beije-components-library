import { View, StyleSheet } from 'react-native'
import Score from './Score'
import React from 'react'

const ScoreBoard = (props) => {

    let customResult = []


    const showCustomResult = () => {

    }

    const showLastResult = () => {

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
        justifyContent: 'space-around'
    }
})

export default ScoreBoard