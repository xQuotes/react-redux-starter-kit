import {
  inject, observer
} from 'mobx-react'

import Api from 'Api'

import FuncList from '../../components/switches/commonInfoList'
import AddDatacenterModal from './add'

@inject(
  'datacenterStore'
  )
@observer
export default class Datacenters extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const bcData = ['首页', '常用信息', '映射信息']
    return(
      <div className="switches-network">
        <FuncList 
          store={this.props.datacenterStore}
          bcData={bcData}
          downloadCSV={Api.downloadDatacenterCSV}
          funcEnName={'datacenter'}/>
        <AddDatacenterModal />
      </div>
      )
  }
}
