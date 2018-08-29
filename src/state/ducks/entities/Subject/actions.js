import { CREATE } from './types'

export const create = subject => ({
  type: CREATE,
  payload: subject
})
