import React from 'react'
import {
  connect
} from 'react-redux'
import {
  IndexRoute,
  Router,
  Route
} from 'react-router'

import DevTools from './DevTools'
import App from './App.js'
import Index from '../route/index/index'
import Main from '../route/index/main/index'
import Login from '../route/login/index'

@connect(() => ({}))
export default class Root extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { history } = this.props
    return(
      <Router history={history}>
        <Route path='/' component={App}>
          <IndexRoute component={Index} />
          <Route path='index' component={Index} >
            <IndexRoute component={Main} />
            <Route path='main' component={Main} />
          </Route>
          <Route path='login' component={Login} />
        </Route>
      </Router>
      )
  }
}