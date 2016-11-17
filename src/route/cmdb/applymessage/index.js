import {
  inject, observer
} from 'mobx-react'

import Api from 'Api'

import FuncList from '../../components/cmdb/tableList'
import AddApplymessageModal from './add'

@inject(
  'applymessageStore'
  )
@observer
export default class Applymessages extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const bcData = ['首页', '常用信息', '应用信息']
    return(
      <div className="switches-network">
        <FuncList 
          store={this.props.applymessageStore}
          bcData={bcData}
          downloadCSV={Api.downloadApplymessageCSV}
          funcEnName={'applymessage'}/>
        <AddApplymessageModal />
      </div>
      )
  }
}
