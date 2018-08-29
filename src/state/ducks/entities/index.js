import { createReducer } from 'redux-orm'
import orm from './orm'

import * as Semester from './Semester'
import * as Subject from './Subject'
import * as selectors from './selectors'

export {
  Semester,
  Subject,
  selectors
}

export default createReducer(orm)
