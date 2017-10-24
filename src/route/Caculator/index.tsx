import * as React from 'react'
import Header from '../../components/Header/'
import Footer from '../../components/Footer/'
import MainNav from './nav'
import MainStandard from './standard/index'
import MainResult from './result/index'

export default class Caculator extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <Header {...this.props} />
        <div className="main-container">
          <MainNav />
          <MainStandard />
          <MainResult />
          <Footer />
        </div>
      </div>
    )
  }
}
