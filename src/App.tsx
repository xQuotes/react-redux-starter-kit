import * as React from 'react'
import { Provider } from 'mobx-react'
import { Router, Route, Switch, Redirect } from 'react-router'
import { RouterStore } from 'mobx-react-router'
import createBrowserHistory from 'history/createBrowserHistory'

const browserHistory = createBrowserHistory()
const routingStore = new RouterStore()

import Root from './containers/Root'
import store from './stores/index'

import Index from './route/Index/'
import Caculator from './route/Caculator/'
import News from './route/news/'
import Register from './route/Register/'
import Login from './route/Login/'

const stores = {
  routing: routingStore,
  ...store
}

export default class App extends React.Component<{}, {}> {
  render() {
    return (
      <Provider {...stores}>
        <Root>
          <Router history={browserHistory}>
            <Switch>
              <Route
                exact={true}
                path="/"
                render={() => <Redirect to="/index" />}
              />
              <Route path="/index" component={Index} />
              <Route path="/caculator" component={Caculator} />
              <Route path="/news" component={News} />
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
            </Switch>
          </Router>
        </Root>
      </Provider>
    )
  }
}
