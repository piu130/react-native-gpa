import { combineReducers } from 'redux'
import * as uiActions from './actions'
import * as uiSelectors from './selectors'
import semesterReducer, * as semester from './semester'
import subjectReducer, * as subject from './subject'

export {
  uiActions,
  uiSelectors,
  semester,
  subject
}

export default combineReducers({
  semester: semesterReducer,
  subject: subjectReducer
})
