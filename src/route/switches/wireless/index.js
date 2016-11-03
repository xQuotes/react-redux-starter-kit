import {
  inject, observer
} from 'mobx-react'

import Api from 'Api'

import FuncList from '../../components/switches/commonInfoList'
import AddWirelessModal from './add'

@inject(
  'wirelessStore'
  )
@observer
export default class Wirelesss extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const bcData = ['首页', '常用信息', '映射信息']
    return(
      <div className="switches-network">
        <FuncList 
          store={this.props.wirelessStore}
          bcData={bcData}
          downloadCSV={Api.downloadWirelessCSV}
          funcEnName={'wireless'}/>
        <AddWirelessModal />
      </div>
      )
  }
}
