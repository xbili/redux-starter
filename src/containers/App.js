import React, { Component, PropTypes } from 'react'
import { Router } from 'react-router'
import { Provider } from 'react-redux'

require('./App.scss')

class App extends Component {
  static PropTypes = {
    history: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
  }

  render() {
    const { history, routes, store } = this.props

    return (
      <Provider store={store}>
        <div className='app'>
          <Router history={history} children={routes} />
        </div>
      </Provider>
    )
  }
}

export default App

