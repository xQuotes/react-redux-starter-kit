import {
  inject, observer
} from 'mobx-react'

import Api from 'Api'

import FuncList from '../../components/cmdb/tableList'
import AddMysettingModal from './add'

@inject(
  'mysettingStore'
  )
@observer
export default class Mysettings extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const bcData = ['首页', '常用信息', '我的设置']
    return(
      <div className="switches-network">
        <FuncList 
          store={this.props.mysettingStore}
          bcData={bcData}
          downloadCSV={Api.downloadMysettingCSV}
          funcEnName={'mysetting'}/>
        <AddMysettingModal />
      </div>
      )
  }
}
