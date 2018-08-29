import { ORM } from 'redux-orm'
import Semester from './Semester'
import Subject from './Subject'

const orm = new ORM()
orm.register(Semester, Subject)

export default orm
