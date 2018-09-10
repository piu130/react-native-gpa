import { Model, attr, fk } from 'redux-orm'
import { UPSERT } from './types'
import Subject from '../Subject'

export default class Test extends Model {
  static modelName = Test.name

  static fields = {
    id: attr(),
    name: attr(),
    grade: attr(),
    weight: attr(),
    subject: fk(Subject.modelName, 'tests')
  }

  static reducer ({ type, payload }, Test, session) {
    const { parentId, ...test } = payload || {}

    switch (type) {
      case UPSERT:
        Test.upsert({ subject: parentId, ...test })
        break
    }
    return undefined
  }
}
