import {
  inject, observer
} from 'mobx-react'

import Api from 'Api'

import FuncList from '../../components/cmdb/tableList'
import AddNetworkmanageModal from './add'

@inject(
  'networkmanageStore'
  )
@observer
export default class Networkmanages extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const bcData = ['首页', '常用信息', '网段管理']
    return(
      <div className="switches-network">
        <FuncList 
          store={this.props.networkmanageStore}
          bcData={bcData}
          downloadCSV={Api.downloadNetworkmanageCSV}
          funcEnName={'networkmanage'}/>
        <AddNetworkmanageModal />
      </div>
      )
  }
}
