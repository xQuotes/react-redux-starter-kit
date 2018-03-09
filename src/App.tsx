import * as React from 'react'
import { Provider } from 'mobx-react'
import { Router, Route, Switch, Redirect } from 'react-router'
import { RouterStore } from 'mobx-react-router'
import createBrowserHistory from 'history/createHashHistory'

const browserHistory = createBrowserHistory()
const routingStore = new RouterStore()

import Root from './containers/Root'
import store from './stores/index'

import Index from './route/Index/'
import About from './route/Index/about/'
import News from './route/Index/news/'
import Business from './route/Index/business/'
import Careers from './route/Index/careers/'
import Contacts from './route/Index/contacts/'

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
              <Route path={Urls.aboutUs} component={About} />
              <Route path={Urls.news} component={News} />
              <Route path={Urls.coreBusiness} component={Business} />
              <Route path={Urls.careers} component={Careers} />
              <Route path={Urls.contactsUs} component={Contacts} />
            </Switch>
          </Router>
        </Root>
      </Provider>
    )
  }
}
