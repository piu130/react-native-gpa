import { combineReducers } from 'redux'
import * as uiActions from './actions'
import * as uiSelectors from './selectors'
import editingReducer, * as editing from './editing'

export {
  uiActions,
  uiSelectors,
  editing
}

export default combineReducers({
  editing: editingReducer
})
