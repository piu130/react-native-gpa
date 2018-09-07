import { CREATE, SET, REMOVE, CHANGE_PROPERTY } from './types'
import cuid from 'cuid'

export const create = semesterId => ({
  type: CREATE,
  payload: {
    id: cuid(),
    parentId: semesterId
  }
})

export const set = subject => ({
  type: SET,
  payload: subject
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
