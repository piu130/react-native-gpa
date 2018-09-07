import capitalize from 'capitalize'
import * as entities from './entities'
import { editing } from './ui'

export const load = (entityName, id) => (dispatch, getState) => {
  const entity = entities[capitalize(entityName)].selectors.byId(getState(), id)
  dispatch(editing.actions.set(entity))
}

export const save = entityName => (dispatch, getState) => {
  const entity = editing.selectors.get(getState())
  dispatch(entities[capitalize(entityName)].actions.upsert(entity))
}
