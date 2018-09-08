import { ORM } from 'redux-orm'
import Semester from './Semester'
import Subject from './Subject'
import Test from './Test'

const orm = new ORM()
orm.register(
  Semester,
  Subject,
  Test
)

export default orm
