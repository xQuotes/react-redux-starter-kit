import { inject, observer } from 'mobx-react'

import Api from 'Api'

import FuncList from '../../components/switches/commonInfoList'
import AddUserModal from './add'

@inject('userStore')
@observer
export default class Users extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const bcData = ['首页', '用户管理', '列表']
    return (
      <div className="switches-network">
        <FuncList
          store={this.props.userStore}
          bcData={bcData}
          downloadCSV={Api.downloadUserCSV}
          funcEnName={'user'}
        />
        <AddUserModal />
      </div>
    )
  }
}
