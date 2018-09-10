import { createSelector } from 'redux-orm'
import orm from '../orm'

const dbStateSelector = state => state.entities

export const getSubjectWithGrade = createSelector(
  orm,
  [dbStateSelector, paramsForwarder],
  (session, { semesterId }) => {
    session.Subject
  }
)

const testSelector = state => state.entities.Test
export const getAll = state => testSelector(state).items
export const byId = (state, id) => testSelector(state).itemsById[id]
