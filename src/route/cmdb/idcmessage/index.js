import {
  inject, observer
} from 'mobx-react'

import Api from 'Api'

import FuncList from '../../components/cmdb/tableList'
import AddIdcmessageModal from './add'

@inject(
  'idcmessageStore'
  )
@observer
export default class Idcmessages extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const bcData = ['首页', '常用信息', '机房信息']
    return(
      <div className="switches-network">
        <FuncList 
          store={this.props.idcmessageStore}
          bcData={bcData}
          downloadCSV={Api.downloadIdcmessageCSV}
          funcEnName={'idcmessage'}/>
        <AddIdcmessageModal />
      </div>
      )
  }
}
