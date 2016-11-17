import {
  inject, observer
} from 'mobx-react'

import Api from 'Api'

import FuncList from '../../components/cmdb/tableList'
import AddAuthsearchModal from './add'

@inject(
  'authsearchStore'
  )
@observer
export default class Authsearchs extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const bcData = ['首页', '常用信息', '权限查新']
    return(
      <div className="switches-network">
        <FuncList 
          store={this.props.authsearchStore}
          bcData={bcData}
          downloadCSV={Api.downloadAuthsearchCSV}
          funcEnName={'authsearch'}/>
        <AddAuthsearchModal />
      </div>
      )
  }
}
