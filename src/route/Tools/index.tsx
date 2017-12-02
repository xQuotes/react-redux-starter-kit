import * as React from 'react'
import Header from '../../components/Header/'
import Footer from '../../components/Footer/'

import ToolsLink from './toolsLink'
import Tools from './tools'
import ToolsSearch from './toolsSearch'

export default class Caculator extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <Header {...this.props} />
        <div className="main-container">
          <ToolsLink />
          <Tools />
          <ToolsSearch />
        </div>
        <Footer />
      </div>
    )
  }
}
