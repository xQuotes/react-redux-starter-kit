import * as React from 'react'
import { inject, observer } from 'mobx-react'
import Header from '../../components/Header/'
import Footer from '../../components/Footer/'
// import MainNav from './nav'
import MainStandard from './standard/index'
// import MainResult from './result/index'

import Cacu from '../Index/caculator/caculator'

import queryString from 'query-string'

import './caculator.less'

@inject('caculatorStore')
@observer
export default class Caculator extends React.Component<any, any> {
  componentWillMount() {
    const { caculatorStore, location } = this.props
    // const { state } = location || { state:  }
    const state = queryString.parse(location.search)
    caculatorStore.getServers({})
    caculatorStore.setSelectMapItem(
      {
        name: '全国',
        value: 0
      }, state.type
    )
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
