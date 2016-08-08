import React from 'react'

import Auth from 'Auth'

export default class Logout extends React.Component {
  constructor(props) {
    super(props)
    Auth.logout()
  }
  render() {
    return (
      <div></div>
      )
  }
}
