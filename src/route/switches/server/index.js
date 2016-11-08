import {
  inject, observer
} from 'mobx-react'

import Api from 'Api'

import FuncList from '../../components/switches/commonInfoList'
import AddServerModal from './components/add'

@inject(
  'serverStore'
  )
@observer
export default class Servers extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const bcData = ['首页', '常用信息', '服务器']
    return(
      <div className="switches-network">
        <FuncList 
          store={this.props.serverStore}
          bcData={bcData}
          downloadCSV={Api.downloadServerCSV}
          funcEnName={'server'}/>
        <AddServerModal />
      </div>
      )
  }
}
