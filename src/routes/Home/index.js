import HomeView from './components/HomeView'
export default {
  component: HomeView
}

/* For async loading of routes

import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'home',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Home = require('./components/HomeView').default
      const reducer = require('./modules/home').default
      
      cb(null, Home)
    }, 'home')
  }
})

*/
