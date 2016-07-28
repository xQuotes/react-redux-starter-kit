import React from 'react'

import './demo.less'

export default class Demo extends React.Component {
  render() {
    return(
      <div className="demo">
        {this.props.children}
      </div>
      )
  }
}
