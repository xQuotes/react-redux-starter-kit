import {
  inject, observer
} from 'mobx-react'

import Api from 'Api'

import FuncList from '../../components/cmdb/tableList'
import AddDbModal from './add'

@inject(
  'dbStore'
  )
@observer
export default class Dbs extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const bcData = ['首页', '常用信息', '数据库管理']
    return(
      <div className="switches-network">
        <FuncList 
          store={this.props.dbStore}
          bcData={bcData}
          downloadCSV={Api.downloadDbCSV}
          funcEnName={'db'}/>
        <AddDbModal />
      </div>
      )
  }
}
