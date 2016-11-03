import {
  inject, observer
} from 'mobx-react'

import Api from 'Api'

import FuncList from '../../components/switches/commonInfoList'
import AddVpnModal from './add'

@inject(
  'vpnStore'
  )
@observer
export default class Vpns extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const bcData = ['首页', '常用信息', 'VPN']
    return(
      <div className="switches-network">
        <FuncList 
          store={this.props.vpnStore}
          bcData={bcData}
          downloadCSV={Api.downloadVpnCSV}
          funcEnName={'vpn'}/>
        <AddVpnModal />
      </div>
      )
  }
}
