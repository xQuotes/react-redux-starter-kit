import React from 'react'
import classNames from 'classnames'

export default class App extends React.Component {
  render() {
    return (
      <div className={classNames('app')}>
       {this.props.children}
      </div>
      )
  }
}