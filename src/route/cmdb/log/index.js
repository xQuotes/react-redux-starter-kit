import {
  inject, observer
} from 'mobx-react'

import Api from '../../../api/'

import FuncList from '../../components/cmdb/tableList'
import AddLogModal from './add'

@inject(
  'logStore'
  )
@observer
export default class Logs extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const bcData = ['首页', '日志管理', '日志列表']
    return(
      <div className="switches-network">
        <FuncList 
          store={this.props.logStore}
          bcData={bcData}
          downloadCSV={Api.downloadLogCSV}
          funcEnName={'log'}/>
        <AddLogModal />
      </div>
      )
  }
}
