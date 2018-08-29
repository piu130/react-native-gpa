import { Model, attr, many } from 'redux-orm'
import { CREATE } from './types'

export default class Semester extends Model {
  static modelName = 'Semester'

  static fields = {
    id: attr(),
    name: attr(),
    subjects: many('Subject', 'semester')
  }

  static reducer ({ type, payload }, Semester, session) {
    switch (type) {
      case CREATE:
        Semester.create(payload)
        break
    }
    return undefined
  }
}
