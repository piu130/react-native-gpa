import capitalize from 'capitalize'
import * as entities from './entities'
import { uiActions, uiSelectors } from './ui'

export const load = (entityName, id) => (dispatch, getState) => {
  const entity = entities[capitalize(entityName)].selectors.byId(getState(), id)
  dispatch(uiActions.set(entityName, entity))
}

export const save = entityName => (dispatch, getState) => {
  const entity = uiSelectors.get(getState(), entityName)
  dispatch(entities[capitalize(entityName)].actions.upsert(entity))
}
