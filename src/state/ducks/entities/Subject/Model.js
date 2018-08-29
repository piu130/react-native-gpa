import { Model, attr } from 'redux-orm'
import { CREATE } from './types'

export default class Subject extends Model {
  static modelName = 'Subject'

  static fields = {
    id: attr(),
    name: attr()
  }

  static reducer ({ type, payload }, Subject, session) {
    switch (type) {
      case CREATE:
        Subject.create(payload)
        break
    }
    return undefined
  }
}
