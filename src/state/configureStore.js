import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { createBrowserHistory } from 'history'
import storage from 'redux-persist/es/storage'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import createMiddleware from './middleware'
import reducers from './ducks'

export default (initialState) => {
  const history = createBrowserHistory()
  const store = createStore(
    persistReducer(
      {
        key: 'root',
        storage,
        version: 1,
        blacklist: ['ui']
      },
      connectRouter(history)(reducers)
    ),
    initialState,
    compose(applyMiddleware(...createMiddleware(), routerMiddleware(history)))
  )

  const persistor = persistStore(store)

  // persistor.purge()
  return { persistor, store, history }
}
