import * as React from 'react'
import { Router, Route, Switch } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import { Provider } from 'mobx-react'
const browserHistory = createBrowserHistory()

import Index from '../route/'
import User from '../route/user/'

export interface Props {
  store: any
}

export default (props: Props) => (
  <Provider {...props.store}>
    <Router history={browserHistory}>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/user" component={User} />
      </Switch>
    </Router>
  </Provider>
)
