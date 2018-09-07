import cuid from 'cuid'

export const create = (entityName, params) => (dispatch, getState) => {
  dispatch({
    type: `ui/${entityName}/CREATE`,
    payload: {
      id: cuid(),
      ...params
    }
  })
}

export const set = (entityName, entity) => (dispatch, getState) => {
  dispatch({
    type: `ui/${entityName}/SET`,
    payload: entity
  })
}
