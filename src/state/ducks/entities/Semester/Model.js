import { Model, attr } from 'redux-orm'
import { CREATE, UPSERT } from './types'

export default class Semester extends Model {
  static modelName = 'Semester'

  static fields = {
    id: attr(),
    name: attr()
  }

  static reducer ({ type, payload }, Semester, session) {
    switch (type) {
      case CREATE:
        Semester.create(payload)
        break
      case UPSERT:
        Semester.upsert(payload)
        break
    }
    return undefined
  }
}
