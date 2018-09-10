import createReducer from './createReducer'
import orm from './orm'

import { default as Semester } from './Semester'
import { default as Subject } from './Subject'
import { default as Test } from './Test'
import * as selectors from './selectors'

export {
  Semester,
  Subject,
  Test,
  selectors
}

export default createReducer(orm)
