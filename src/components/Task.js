import React, {Component} from "react"
import { StyleSheet, View, Text, ImageBackground } from "react-native"
import moment from "moment"
import 'moment/locale/pt-br'

export default props => {
    return(
        <View>
            <View>
                <Text style={styles.desc}>{props.description}</Text>
                <Text style={styles.date}>{props.estimate_at}</Text>
                <Text style={styles.date}>{props.date_at}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        borderColor: '#AAA',
        borderBottomWidth: 1,
        alignItems: 'center',
        paddingVertival: 20
    },
    desc:{
        fontFamily: 'Arial',
        fontSize: 20,
        color: '#333'
    },
    date:{
        fontFamily: 'Arial',
        color: '#555'
    }
})