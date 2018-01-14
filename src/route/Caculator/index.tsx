import * as React from 'react'
import { inject, observer } from 'mobx-react'
import Header from '../../components/Header/'
import Footer from '../../components/Footer/'
import MainNav from './nav'
import MainStandard from './standard/index'
// import MainResult from './result/index'

import './caculator.less'

@inject('caculatorStore')
@observer
export default class Caculator extends React.Component<any, any> {
  componentWillMount() {
    const { caculatorStore } = this.props
    caculatorStore.getServers({})
    caculatorStore.getServer({
      type: '',
      code: 0
    })
  }
  render() {
    return (
      <div>
        <Header {...this.props} />
        <div className="main-container">
          <MainNav />
          <MainStandard />
        </div>
        <Footer />
      </div>
    )
  }
}
