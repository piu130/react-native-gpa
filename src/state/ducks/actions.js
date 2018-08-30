import * as entities from './entities'
import { semester as uiSemester, uiActions, uiSelectors } from './ui'
import { ucFirst } from '../utils'

export const load = (entityName, id) => (dispatch, getState) => {
  const entity = entities[ucFirst(entityName)].selectors.byId(getState(), id)
  dispatch(uiActions.set(entityName, entity))
}

export const save = entityName => (dispatch, getState) => {
  const entity = uiSelectors.get(getState(), entityName)
  dispatch(entities[ucFirst(entityName)].actions.upsert(entity))
}

export const saveSemester = () => (dispatch, getState) => {
  const semester = uiSemester.selectors.get(getState())
  dispatch(entities.Semester.actions.upsert(semester))
}
