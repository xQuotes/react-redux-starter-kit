import * as React from 'react'

import './index.less'

export default class Root extends React.Component<{}, {}> {
  renderDevTool() {
    if (process.env.NODE_ENV !== 'production') {
      const DevTools = require('mobx-react-devtools').default
      return <DevTools />
    } else {
      return null
    }
  }

  render() {
    return (
      <div className="container">
        {this.props.children}
        {this.renderDevTool()}
      </div>
    )
  }
}
