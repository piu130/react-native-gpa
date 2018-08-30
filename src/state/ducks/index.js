import { combineReducers } from 'redux'
import * as duckActions from './actions'
import entities from './entities'
import ui from './ui'

export {
  duckActions
}

export default combineReducers({
  entities,
  ui
})
