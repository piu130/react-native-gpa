import { CREATE, SET, REMOVE, CHANGE_PROPERTY } from './types'
import cuid from 'cuid'

export const create = parentId => ({
  type: CREATE,
  payload: {
    id: cuid(),
    parentId
  }
})

export const set = object => ({
  type: SET,
  payload: object
})

export const remove = () => ({
  type: REMOVE
})

export const changeProperty = (property, value) => ({
  type: CHANGE_PROPERTY,
  payload: {
    property,
    value
  }
})
export const changeName = name => changeProperty('name', name)
