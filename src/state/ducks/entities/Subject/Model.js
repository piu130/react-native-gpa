import { Model, attr, fk } from 'redux-orm'
import { UPSERT } from './types'

export default class Subject extends Model {
  static modelName = 'Subject'

  static fields = {
    id: attr(),
    name: attr(),
    semester: fk('Semester', 'subjects')
  }

  static reducer ({ type, payload }, Subject, session) {
    if (!payload) return undefined
    const { parentId, ...subject } = payload
    switch (type) {
      case UPSERT:
        Subject.upsert({ semester: parentId, ...subject })
        break
    }
    return undefined
  }
}
