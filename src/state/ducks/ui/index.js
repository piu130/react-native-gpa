import { combineReducers } from 'redux'
import editSemesterReducer, * as editSemester from './editSemester'

export {
  editSemester
}

export default combineReducers({
  editSemester: editSemesterReducer
})
