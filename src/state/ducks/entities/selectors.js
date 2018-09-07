import { createSelector } from 'redux-orm'
import orm from './orm'

const dbStateSelector = state => state.entities

const paramsForwarder = (state, props) => props

export const semesters = createSelector(
  orm,
  [dbStateSelector],
  session => session.Semester.all().toModelArray()
)

export const subjectsBySemesterId = createSelector(
  orm,
  [dbStateSelector, paramsForwarder],
  (session, { id }) => session.Semester.withId(id).subjects.toModelArray()
)
const functions = {
  semesters: session => session.Semester.all().toModelArray(),
  subjects: (session, { id }) => session.Semester.withId(id).subjects.toModelArray()
}

export const entities = createSelector(
  orm,
  [dbStateSelector, paramsForwarder],
  (session, { entityName, ...rest }) => functions[entityName](session, rest)
)
