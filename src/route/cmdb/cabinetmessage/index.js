import {
  inject, observer
} from 'mobx-react'

import Api from 'Api'

import FuncList from '../../components/cmdb/tableList'
import AddCabinetmessageModal from './add'

@inject(
  'cabinetmessageStore'
  )
@observer
export default class Cabinetmessages extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const bcData = ['首页', '常用信息', '机柜信息']
    return(
      <div className="switches-network">
        <FuncList 
          store={this.props.cabinetmessageStore}
          bcData={bcData}
          downloadCSV={Api.downloadCabinetmessageCSV}
          funcEnName={'cabinetmessage'}/>
        <AddCabinetmessageModal />
      </div>
      )
  }
}
