import * as React from 'react'
import Header from '../../components/Header/'
import Footer from '../../components/Footer/'

import EarchChart from './earth'
import Content from './content'

export default class Caculator extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <Header {...this.props} />
        <div className="main-container">
          <EarchChart />
          <Content />
        </div>
        <Footer />
      </div>
    )
  }
}
