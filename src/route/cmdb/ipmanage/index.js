import {
  inject, observer
} from 'mobx-react'

import Api from 'Api'

import FuncList from '../../components/cmdb/tableList'
import AddIPmanageModal from './add'

@inject(
  'ipmanageStore'
  )
@observer
export default class IPmanages extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const bcData = ['首页', '常用信息', 'IP管理']
    return(
      <div className="switches-network">
        <FuncList 
          store={this.props.ipmanageStore}
          bcData={bcData}
          downloadCSV={Api.downloadIPmanageCSV}
          funcEnName={'ipmanage'}/>
        <AddIPmanageModal />
      </div>
      )
  }
}
