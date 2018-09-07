import { ListPage, EditPage } from '../views/pages'

export default [
  // {
  //   path: '/(semesters)?',
  //   component: SemestersPage,
  //   exact: true
  // },
  {
    path: '/:entity([^/]+s)/:id?',
    component: ListPage,
    exact: true
  },
  {
    path: '/:entity/:action/:id?',
    component: EditPage,
    exact: true
  }
  // {
  //   path: '/semester/:action/:id?',
  //   component: EditSemesterPage,
  //   exact: true
  // },
  // {
  //   path: '/subject/:action/:id?',
  //   component: EditSemesterPage,
  //   exact: true
  // }
]
