import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/es/storage'
import createMiddleware from './middleware'
import reducers from './ducks'

export default (initialState, customReducers, customMiddleware) => {
  const store = createStore(
    persistReducer(
      {
        key: 'root',
        storage,
        version: 1,
        blacklist: ['ui']
      },
      combineReducers({ ...reducers, ...customReducers })
    ),
    initialState,
    compose(applyMiddleware(...createMiddleware(), ...customMiddleware))
  )

  const persistor = persistStore(store)

  persistor.purge()
  return { persistor, store }
}
