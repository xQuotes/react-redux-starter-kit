import {
  inject, observer
} from 'mobx-react'

import Api from 'Api'

import FuncList from '../../components/cmdb/tableList'
import AddServermessageModal from './add'

@inject(
  'servermessageStore'
  )
@observer
export default class Servermessages extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const bcData = ['首页', '常用信息', '服务信息']
    return(
      <div className="switches-network">
        <FuncList 
          store={this.props.servermessageStore}
          bcData={bcData}
          downloadCSV={Api.downloadServermessageCSV}
          funcEnName={'servermessage'}/>
        <AddServermessageModal />
      </div>
      )
  }
}
