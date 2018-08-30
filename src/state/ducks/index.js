import { combineReducers } from 'redux'
import * as actions from './actions'
import entities from './entities'
import ui from './ui'

export {
  actions
}

export default combineReducers({
  entities,
  ui
})
