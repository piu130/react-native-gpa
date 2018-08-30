import cuid from 'cuid'
import { CREATE, UPSERT } from './types'

export const create = semester => ({
  type: CREATE,
  payload: {
    id: cuid(),
    ...semester
  }
})

export const upsert = semester => ({
  type: UPSERT,
  payload: semester
})
