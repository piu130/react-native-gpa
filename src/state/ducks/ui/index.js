import { combineReducers } from 'redux'
import * as uiSelectors from './selectors'
import editingReducer, * as editing from './editing'

export {
  uiSelectors,
  editing
}

export default combineReducers({
  editing: editingReducer
})
