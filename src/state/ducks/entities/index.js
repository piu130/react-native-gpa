import { createReducer } from 'redux-orm'
import orm from './orm'

import * as Semester from './Semester'
import * as Subject from './Subject'
import * as Test from './Test'
import * as selectors from './selectors'

export {
  Semester,
  Subject,
  Test,
  selectors
}

export default createReducer(orm)
