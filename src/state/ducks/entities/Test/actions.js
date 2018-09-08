import { UPSERT } from './types'

export const upsert = test => ({
  type: UPSERT,
  payload: test
})
