import { inject, observer } from 'mobx-react'

import { Button } from 'antd'

import Api from 'Api'

import FuncList from '../../components/switches/commonInfoList'
import AddUserModal from './add'

@inject('userStore')
@observer
export default class Users extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    const { userStore } = this.props
    userStore.getServers({
      role: '1',
      source: '1',
      token: '1'
    })
  }
  handleAudit = () => {
    alert('还没有接口')
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
          actions={() => {
            return <Button onClick={this.handleAudit}>冻结/解冻</Button>
          }}
        />
        <AddUserModal />
      </div>
    )
  }
}
