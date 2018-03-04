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

import Urls from './common/url'

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
              <Redirect exact={true} from={'/'} to={Urls.index} />
              <Route path={Urls.index} component={Index} />
            </Switch>
          </Router>
        </Root>
      </Provider>
    )
  }
}
