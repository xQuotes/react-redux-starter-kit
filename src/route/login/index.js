import Login from './components/login'

import './index.less'

export default class LoginIndex extends React.Component {
  render() {
    return(
      <div
        className="login">
        <Login className="login_index"/>
      </div>
      )
  }
}