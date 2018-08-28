import { Component } from 'react'
import { configure } from './config'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'
import { configureStore } from './state'
import { View } from 'react-native-web'
import { Header } from 'react-native-elements'
import './App.css'

configure()
const { persistor, store } = configureStore(undefined, {}, [])

export default class App extends Component {
  state = {
    name: 'test'
  };

  render () {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
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
        </PersistGate>
      </Provider>
    )
  }
}
