import React from "react"
import { StyleSheet, View, Text, ImageBackground, TouchableWithoutFeedback} from "react-native"
import moment from "moment"
import 'moment/locale/pt-br'
import { Icon } from "react-native-vector-icons/FontAwesome6"

export default props => {
    return(
        <View style = {styles.container}>
            <TouchableWithoutFeedback onPress = {() => alert ("Olá")}>
                <View style = {styles.checkContainer}>
                    <View>
                        <Icon name = "check" size = {20}></Icon>
                    </View>
                </View>
            </TouchableWithoutFeedback>
                <View>
                    <Text style={styles.desc}>{props.description}</Text>
                    <Text style={styles.date}>{props.estimate_at + ""}</Text>
                    <Text style={styles.date}>{props.done_at + ""}</Text>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        borderColor: '#AAA',
        borderBottomWidth: 1,
        alignItems: 'center',
        paddingVertical: 20
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