import { Model, attr } from 'redux-orm'
import { UPSERT } from '../Semester/types'

export default class Semester extends Model {
  static modelName = Semester.name

  static fields = {
    id: attr(),
    name: attr()
  }

  static reducer ({ type, payload }, Semester, session) {
    switch (type) {
      case UPSERT:
        Semester.upsert(payload)
        break
    }
    return undefined
  }
}
