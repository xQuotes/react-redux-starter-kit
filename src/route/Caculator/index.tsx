import * as React from 'react'
import { inject, observer } from 'mobx-react'
import Header from '../../components/Header/'
import Footer from '../../components/Footer/'
// import MainNav from './nav'
import MainStandard from './standard/index'
// import MainResult from './result/index'

import Cacu from '../Index/caculator/caculator'

import './caculator.less'

@inject('caculatorStore')
@observer
export default class Caculator extends React.Component<any, any> {
  componentWillMount() {
    const { caculatorStore } = this.props
    caculatorStore.getServers({
      type: '701'
    })
    caculatorStore.getServer({
      type: '701'
    })
  }
  render() {
    return (
      <div className="caculator">
        <Header {...this.props} />
        <div className="main-container">
          {/* <MainNav history={this.props.history} /> */}
          <MainStandard {...this.props} />
        </div>
        <Cacu {...this.props} page={'caculator'} />
        <Footer />
      </div>
    )
  }
}
