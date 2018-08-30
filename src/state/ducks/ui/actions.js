import cuid from 'cuid'

export const create = entityName => (dispatch, getState) => {
  dispatch({
    type: `ui/${entityName}/CREATE`,
    payload: { id: cuid() }
  })
}

export const set = (entityName, entity) => (dispatch, getState) => {
  dispatch({
    type: `ui/${entityName}/SET`,
    payload: entity
  })
}
