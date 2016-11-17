import {
  inject, observer
} from 'mobx-react'

import Api from 'Api'

import FuncList from '../../components/cmdb/tableList'
import AddConnectionModal from './add'

@inject(
  'connectionStore'
  )
@observer
export default class Connections extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const bcData = ['首页', '常用信息', 'Connection']
    return(
      <div className="switches-network">
        <FuncList 
          store={this.props.connectionStore}
          bcData={bcData}
          downloadCSV={Api.downloadConnectionCSV}
          funcEnName={'connection'}/>
        <AddConnectionModal />
      </div>
      )
  }
}
