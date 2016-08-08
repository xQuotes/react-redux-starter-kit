import React from 'react'

import Ads from '../route/ads/index'

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
       {this.props.children}
      </div>
      )
  }
}