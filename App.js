import React, { Component } from 'react'
import {createStackNavigator,createAppContainer} from 'react-navigation';
import Home from './screens/Home';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';
import {fromBottom} from 'react-navigation-transitions'


const CreateStack = createStackNavigator({
  Home:{
    screen:Home
  },
  Screen2:{
    screen:Screen2
  },
  Screen3:{
    screen:Screen3
  }
},{
  headerMode:"none",
  transitionConfig:() => fromBottom()
})

const CreateApp = createAppContainer(CreateStack)

export default class App extends Component {
  render() {
    return (
        <CreateApp />
    )
  }
}