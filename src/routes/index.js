import { ListPage, EditPage } from '../views/pages'

export default [
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
]
