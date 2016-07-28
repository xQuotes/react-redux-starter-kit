import React from 'react'
import {
  connect
} from 'react-redux'
import {
  Router,
  browserHistory,
  createHashHistory
} from 'react-router'

import App from './App'

const rootRoute = {
  component: App,
  scrollBehavior: "scrollToTop",
  childRoutes: [{
    path: '/',
    getChildRoutes(location, callback) {
      require.ensure([], function (require) {
        callback(null, [
          require('../route/index/route'),
          require('../route/login/route')
        ])
      })
    }
  }]
}

@connect((state)=>({}))
export default class Root extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { history } = this.props
    return(
      <Router history={history} routes={rootRoute}/>
      )
  }
}