import {
  Router
} from 'react-router'
import {
  Provider
} from 'mobx-react'

import App from './App'

const rootRoute = {
  childRoutes: [{
    path: '/',
    component: App,
    indexRoute: {
      component: require('../route/index')['default']
    },
    scrollBehavior: "scrollToTop",
    getChildRoutes(location, callback) {
      require.ensure([], function (require) {
        callback(null, [
          require('../route/register/route'),
          require('../route/login/route')
        ])
      })
    }
  }]
}

export default class Root extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <Provider userStore={this.props.userStore}>
        <Router routes={rootRoute} history={this.props.history}/>
      </Provider>
      )
  }
}