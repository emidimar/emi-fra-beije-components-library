import { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native-web'

import CustomButton from './CustomButton'
import Score from './Score'

class ScoreBoard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.scoreContainer}>
                <Score/>
                <Score/>
                <Score/>
                <Score/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    scoreContainer: {
        flex: 1,
        flexDirection: 'row'
    }
}) 

export default ScoreBoard