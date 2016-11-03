import {
  inject, observer
} from 'mobx-react'

import Api from 'Api'

import FuncList from '../../components/switches/commonInfoList'
import AddNetworksubModal from './add'

@inject(
  'networksubStore'
  )
@observer
export default class Networksubs extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const bcData = ['首页', '常用信息', '映射信息']
    return(
      <div className="switches-network">
        <FuncList 
          store={this.props.networksubStore}
          bcData={bcData}
          downloadCSV={Api.downloadNetworksubCSV}
          funcEnName={'networksub'}/>
        <AddNetworksubModal />
      </div>
      )
  }
}
