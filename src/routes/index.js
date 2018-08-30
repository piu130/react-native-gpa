import { SemestersPage, NewSemesterPage } from '../views/pages'

export default [
  {
    path: '/',
    component: SemestersPage,
    exact: true
  },
  {
    path: '/newSemester',
    component: NewSemesterPage,
    exact: true
  }
]
