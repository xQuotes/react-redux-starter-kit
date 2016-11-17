import {
  inject, observer
} from 'mobx-react'

import Api from 'Api'

import FuncList from '../../components/cmdb/tableList'
import AddQuicksearchModal from './add'

@inject(
  'quicksearchStore'
  )
@observer
export default class Quicksearchs extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const bcData = ['首页', '常用信息', '快速查询']
    return(
      <div className="switches-network">
        <FuncList 
          store={this.props.quicksearchStore}
          bcData={bcData}
          downloadCSV={Api.downloadQuicksearchCSV}
          funcEnName={'quicksearch'}/>
        <AddQuicksearchModal />
      </div>
      )
  }
}
