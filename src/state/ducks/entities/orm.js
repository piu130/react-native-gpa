import { ORM } from 'redux-orm'
import { Semester, Subject, Test } from './Models'

const orm = new ORM()
orm.register(
  Semester,
  Subject,
  Test
)

export default orm
