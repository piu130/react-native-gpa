import { Component } from 'react'
import { View } from 'react-native-web'
import { Header } from 'react-native-elements'
import './App.css'

export default class App extends Component {
  render () {
    return (
      <View>
        <Header
          centerComponent={{
            text: 'hellou'
          }}
          rightComponent={{
            icon: 'settings'
          }}
        />
      </View>
    )
  }
}
