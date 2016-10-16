import React from 'react'

import './button.less'

export default class Button extends React.Component {
  render() {
    return (
      <button>{this.props.children}</button>
      )
  }
}