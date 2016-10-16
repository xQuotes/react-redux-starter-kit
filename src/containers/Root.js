import {
  IndexRoute,
  Router,
  Route
} from 'react-router'

import App from './App.js'
import Ads from '../route/ads/index'
import Index from '../route/index/index'
import Main from '../route/index/main/index'
import Login from '../route/login/index'

export default class Root extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { history } = this.props
    return(
      <Router history={history}>
        <Route path='/' component={App}>
          <IndexRoute component={Login} />
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