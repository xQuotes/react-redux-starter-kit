import React from 'react'

import {
  Link
} from 'react-router'

export default class Main extends React.Component {
  render() {
    return(
      <div>
        <Link
          to='/login'>
          Login
        </Link>
      </div>
      )
  }
}