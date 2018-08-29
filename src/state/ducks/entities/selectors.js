import { createSelector } from 'redux-orm'
import orm from './orm'

const dbStateSelector = state => state.entities

export const semesters = createSelector(
  orm,
  dbStateSelector,
  session => {
    return session.Semester.all().toModelArray().map(semester => {
      const obj = semester.ref

      return { ...obj, subjects: semester.subjects.toRefArray() }
    })
  }
)
