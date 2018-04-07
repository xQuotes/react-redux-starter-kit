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
import Tools from './route/Tools/'
import Guide from './route/Guide/'
import Search from './route/Search/'
import SearchView from './route/Search/main'
import Ask from './route/Ask/'
import Message from './route/Message/'
import Mine from './route/Mine/'
import FindPassword from './route/Login/findPassword'

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
              <Route
                exact={true}
                path="/"
                render={() => <Redirect to={Urls.index} />}
              />
              <Route path={Urls.index} component={Index} />
              <Route path={Urls.caculator} component={Caculator} />
              <Route path={`${Urls.my}/:type`} component={Mine} />
              <Route path={Urls.news} component={News} />
              <Route path={Urls.register} component={Register} />
              <Route path={Urls.login} component={Login} />
              <Route path={Urls.tools} component={Tools} />
              <Route path={Urls.guide} component={Guide} />
              <Route path={`${Urls.search}/:id`} component={SearchView} />
              <Route
                exact={true} path={Urls.search} component={Search} />
              <Route path={Urls.ask} component={Ask} />
              <Route path={Urls.message} component={Message} />
              <Route path={Urls.findPassword} component={FindPassword} />
            </Switch>
          </Router>
        </Root>
      </Provider>
    )
  }
}
