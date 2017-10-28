import * as React from 'react'
import Header from '../../components/Header/'
import Footer from '../../components/Footer/'
import MainNav from './nav/index'
import MainCarousel from './carousel/index'
import MainCaculator from './caculator/index'
import MainStandard from './standard/index'
import Indicator from './indicator/index'

import './index.less'

export default class Hello extends React.Component<{}, {}> {
  render() {
    return (
      <div className="index">
        <Header {...this.props} />
        <MainCarousel />
        <MainNav />
        <div className="main-container">
          <MainCaculator />
          <MainStandard />
          <Indicator />
        </div>
        <Footer />
      </div>
    )
  }
}
