import cuid from 'cuid'
import { CREATE } from './types'

export const create = semester => ({
  type: CREATE,
  payload: {
    id: cuid(),
    ...semester
  }
})
