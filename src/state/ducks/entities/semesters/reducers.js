import { ADD } from './types'
import createReducer from '../../../createReducer'

export default createReducer([])({
  [ADD]: (state, { payload }) => [ ...state, payload ]
})
