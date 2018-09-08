import { Model, attr, fk } from 'redux-orm'
import { UPSERT } from './types'

export default class Test extends Model {
  static modelName = 'Test'

  static fields = {
    id: attr(),
    name: attr(),
    subject: fk('Subject', 'tests')
  }

  static reducer ({ type, payload }, Test, session) {
    const { parentId, ...test } = payload || {}

    switch (type) {
      case UPSERT:
        Test.upsert({ semester: parentId, ...test })
        break
    }
    return undefined
  }
}
