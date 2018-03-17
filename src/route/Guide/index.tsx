import * as React from 'react'
import Header from '../../components/Header/'
import Footer from '../../components/Footer/'

// import EarchChart from './earth'
import Content from './content'

import './guide.less'

import Standard from '../Index/standard/standard'

export default class Caculator extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <Header {...this.props} />
        <div style={{ backgroundColor: '#f3f4f6' }}>
          <div className="main-container">
            <Standard componentType="guide" {...this.props} />
            <div style={{
              marginTop: '55px'
            }}>
              <Content {...this.props} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
