import { Model, attr, fk } from 'redux-orm'
import { UPSERT } from './types'
import Semester from '../Semester'

export default class Subject extends Model {
  static modelName = Subject.name

  static fields = {
    id: attr(),
    name: attr(),
    semester: fk(Semester.modelName, 'subjects')
  }

  static reducer ({ type, payload }, Subject, session) {
    const { parentId, ...subject } = payload || {}

    switch (type) {
      case UPSERT:
        Subject.upsert({ semester: parentId, ...subject })
        break
    }
    return undefined
  }
}
