import * as React from 'react'
import Header from '../../components/Header/'
import Footer from '../../components/Footer/'

// import EarchChart from './earth'
import Content from './content'

import Standard from '../Index/standard/index'

export default class Caculator extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <Header {...this.props} />
        <div className="main-container">
          <Standard componentType="guide" {...this.props} />
          <Content {...this.props} />
        </div>
        <Footer />
      </div>
    )
  }
}
