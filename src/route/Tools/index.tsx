import * as React from 'react'
import Header from '../../components/Header/'
import Footer from '../../components/Footer/'

import ToolsLink from './toolsLink'

export default class Caculator extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <Header {...this.props} />
        <div className="main-container">
          <ToolsLink />
        </div>
        <Footer />
      </div>
    )
  }
}
