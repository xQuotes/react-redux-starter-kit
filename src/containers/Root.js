import {
  inject, observer
} from 'mobx-react'
import {
  Router
} from 'react-router'

import App from './App'
import routes from '../route/route'

import Auth from 'Auth'

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
        callback(null, routes)
      })
    }
  }]
}

@inject('userStore') @observer
export default class Root extends React.Component {
  constructor(props) {
    super(props)

    // 判断是否登录
    // Auth.checkAuthCookie('UserIfosSession')
  }
  componentDidMount() {
    // this.props.userStore.getMeServer()
  }
  render() {
    return(
        <Router routes={rootRoute} history={this.props.history}/>
      )
  }
}