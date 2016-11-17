import {
  inject, observer
} from 'mobx-react'

import Api from 'Api'

import FuncList from '../../components/cmdb/tableList'
import AddDevicuseModal from './add'

@inject(
  'devicuseStore'
  )
@observer
export default class Devicuses extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const bcData = ['首页', '常用信息', '设备用途']
    return(
      <div className="switches-network">
        <FuncList 
          store={this.props.devicuseStore}
          bcData={bcData}
          downloadCSV={Api.downloadDevicuseCSV}
          funcEnName={'devicuse'}/>
        <AddDevicuseModal />
      </div>
      )
  }
}
