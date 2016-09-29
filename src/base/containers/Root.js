import {
  connect
} from 'react-redux'
import {
  Router,
  browserHistory,
  createbrowserHistory
} from 'react-router'

import App from './App'

const rootRoute = {
  childRoutes: [{
    path: '/',
    component: App,
    indexRoute: {
      component: require('../route/index/index')['default']
    },
    scrollBehavior: "scrollToTop",
    getChildRoutes(location, callback) {
      require.ensure([], function (require) {
        callback(null, [
          require('../route/switches/route')
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