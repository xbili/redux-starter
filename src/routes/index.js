import CoreLayout from '../layouts/CoreLayout/CoreLayout'
import Home from './Home'
import Profile from './Profile'

export const createRoutes = (store) => ({
  path: '/',
  component: CoreLayout,
  indexRoute: Home,
  childRoutes: [
    Profile(store)
  ]
})

export default createRoutes

