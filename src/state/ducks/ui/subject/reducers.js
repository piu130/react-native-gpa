import { CREATE, SET, REMOVE, CHANGE_PROPERTY } from './types'
import { createReducer } from '../../../utils'

const todoReducer = createReducer({})({
  [CREATE]: (state, { payload }) => payload,
  [SET]: (state, { payload }) => payload,
  [REMOVE]: (state, action) => {},
  [CHANGE_PROPERTY]: (state, { payload }) => ({ ...state, [payload.property]: payload.value })
})

export default todoReducer
