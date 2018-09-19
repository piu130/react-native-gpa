import thunk from 'redux-thunk'
import logger from 'redux-logger'

export default () => {
  const middlewares = [
    thunk
  ]
  if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
  }
  return middlewares
}
