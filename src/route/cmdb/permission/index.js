import {
  inject, observer
} from 'mobx-react'

import Api from '../../../api/'

import FuncList from '../../components/cmdb/tableList'
import AddPermissionModal from './add'

@inject(
  'permissionStore'
  )
@observer
export default class Permissions extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const bcData = ['首页', '权限管理', '权限列表']
    return(
      <div className="switches-network">
        <FuncList 
          store={this.props.permissionStore}
          bcData={bcData}
          downloadCSV={Api.downloadPermissionCSV}
          funcEnName={'permission'}/>
        <AddPermissionModal />
      </div>
      )
  }
}
