import { Component } from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch, Redirect } from 'react-router'
import { configure } from './config'
import routes from './routes'
import { PersistGate } from 'redux-persist/es/integration/react'
import { configureStore } from './state'
import './App.css'

configure()

const { persistor, store, history } = configureStore()

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ConnectedRouter history={history}>
            <Switch>
              <Route exact path='/' render={() => <Redirect to='/semesters' />} />
              {routes.map((route) => (
                <Route key={route.path} {...route} />
              ))}
            </Switch>
          </ConnectedRouter>
        </PersistGate>
      </Provider>
    )
  }
}
