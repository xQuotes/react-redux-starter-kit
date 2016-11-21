import {
  inject, observer
} from 'mobx-react'

import Api from 'Api'

import FuncList from '../../components/cmdb/tableList'
import AddTableModal from './add'

@inject(
  'tableStore'
  )
@observer
export default class Tables extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const bcData = ['首页', '常用信息', '表单管理']
    return(
      <div className="switches-network">
        <FuncList 
          store={this.props.tableStore}
          bcData={bcData}
          downloadCSV={Api.downloadTableCSV}
          funcEnName={'table'}/>
        <AddTableModal />
      </div>
      )
  }
}
