import { Semester } from './entities'
import { editSemester } from './ui'

export const loadSemester = id => (dispatch, getState) => {
  const semester = Semester.selectors.byId(getState(), id)
  dispatch(editSemester.actions.set(semester))
}
