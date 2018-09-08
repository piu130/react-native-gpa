import { combineReducers } from 'redux'
import editingReducer, * as editing from './editing'

export {
  editing
}

export default combineReducers({
  editing: editingReducer
})
