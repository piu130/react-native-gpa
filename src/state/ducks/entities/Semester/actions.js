import { UPSERT } from './types'

export const upsert = semester => ({
  type: UPSERT,
  payload: semester
})
