import { Semester } from './entities'
import { editSemester } from './ui'

export const loadSemester = id => (dispatch, getState) => {
  const semester = Semester.selectors.byId(getState(), id)
  dispatch(editSemester.actions.set(semester))
}

export const saveSemester = () => (dispatch, getState) => {
  const semester = editSemester.selectors.get(getState())
  dispatch(Semester.actions.upsert(semester))
}
