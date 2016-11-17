import {
  inject, observer
} from 'mobx-react'

import Api from 'Api'

import FuncList from '../../components/cmdb/tableList'
import AddMulsearchModal from './add'

@inject(
  'mulsearchStore'
  )
@observer
export default class Mulsearchs extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const bcData = ['首页', '常用信息', '综合查询']
    return(
      <div className="switches-network">
        <FuncList 
          store={this.props.mulsearchStore}
          bcData={bcData}
          downloadCSV={Api.downloadMulsearchCSV}
          funcEnName={'mulsearch'}/>
        <AddMulsearchModal />
      </div>
      )
  }
}
