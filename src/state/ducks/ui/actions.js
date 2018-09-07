import cuid from 'cuid'

export const create = (entityName, params) => (dispatch, getState) => {
  dispatch({
    type: `ui/editing/CREATE`,
    payload: {
      id: cuid(),
      ...params
    }
  })
}

export const set = (entityName, entity) => (dispatch, getState) => {
  dispatch({
    type: `ui/editing/SET`,
    payload: {
      entityName,
      entity
    }
  })
}
