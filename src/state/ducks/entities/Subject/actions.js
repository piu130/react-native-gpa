import { UPSERT } from './types'

export const upsert = subject => ({
  type: UPSERT,
  payload: subject
})
