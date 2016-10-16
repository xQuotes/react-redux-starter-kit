import React from 'react'

import Overlay from '../../components/overlay/index'
import Login from './components/login'
import Button from '../../components/button/index'

import './index.less'

export default class LoginIndex extends React.Component {
  render() {
    return(
      <div
        className="login">
        <Overlay />
        <Login className="login_index"/>
      </div>
      )
  }
}