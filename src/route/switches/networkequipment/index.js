import {
  inject, observer
} from 'mobx-react'

import Api from 'Api'

import FuncList from '../../components/switches/commonInfoList'
import AddNetworkequipmentModal from './add'

@inject(
  'networkequipmentStore'
  )
@observer
export default class Networkequipments extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const bcData = ['首页', '常用信息', '网络设备']
    return(
      <div className="switches-network">
        <FuncList 
          store={this.props.networkequipmentStore}
          bcData={bcData}
          downloadCSV={Api.downloadNetworkequipmentCSV}
          funcEnName={'networkequipment'}/>
        <AddNetworkequipmentModal />
      </div>
      )
  }
}
