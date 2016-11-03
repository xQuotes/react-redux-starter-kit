import {
  inject, observer
} from 'mobx-react'

import Api from 'Api'

import FuncList from '../../components/switches/commonInfoList'
import AddAccountmanagerModal from './add'

@inject(
  'accountmanagerStore'
  )
@observer
export default class Accountmanagers extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const bcData = ['首页', '常用信息', /*file_title*/]
    return(
      <div className="switches-network">
        <FuncList 
          store={this.props.accountmanagerStore}
          bcData={bcData}
          downloadCSV={Api.downloadAccountmanagerCSV}
          funcEnName={'accountmanager'}/>
        <AddAccountmanagerModal />
      </div>
      )
  }
}
