import { createSelector } from 'redux-orm'
import orm from './orm'

const dbStateSelector = state => state.entities

const paramsForwarder = (state, props) => props

const functions = {
  semesters: session => session.Semester.all().toModelArray(),
  subjects: (session, { id }) => session.Semester.withId(id).subjects.toModelArray(),
  tests: (session, { id }) => session.Subject.withId(id).tests.toModelArray()
}

export const entities = createSelector(
  orm,
  [dbStateSelector, paramsForwarder],
  (session, { entityName, ...rest }) => functions[entityName](session, rest)
)
