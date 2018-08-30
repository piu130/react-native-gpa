import { createSelector } from 'reselect'
import { createSelector as createSelectorORM } from 'redux-orm'
import orm from './orm'

const dbStateSelector = state => state.entities

const ormSelector = createSelectorORM(orm, dbStateSelector, session => session)
const paramsForwarder = (state, props) => props

export const semesters = createSelector(
  ormSelector,
  session => session.Semester.all().toModelArray()
)

export const subjectsBySemesterId = createSelector(
  [ormSelector, paramsForwarder],
  (session, params) => {
    console.log('-----------------', session.Subject.all().toModelArray())
    console.log(session)
    console.log(params)
    return session.Subject.all().toModelArray()
  }
)
