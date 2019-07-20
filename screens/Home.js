import React, { Component } from 'react'
import {Text,View,TouchableOpacity} from 'react-native'

export default class Home extends Component {
    render() {
        return (
            <View>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("Screen2")}><Text>Home</Text></TouchableOpacity>
            </View>
        )
    }
}
