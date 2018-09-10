import { SettingsPage, ListPage, EditPage } from '../views/pages'

export default [
  {
    path: '/settings',
    component: SettingsPage,
    exact: true
  },
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
