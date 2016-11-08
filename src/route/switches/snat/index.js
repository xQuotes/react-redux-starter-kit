import {
  inject, observer
} from 'mobx-react'

import Api from 'Api'

import FuncList from '../../components/switches/commonInfoList'
import AddSnatModal from './add'

@inject(
  'snatStore'
  )
@observer
export default class Snats extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const bcData = ['首页', '常用信息', 'S-NAT']
    return(
      <div className="switches-network">
        <FuncList 
          store={this.props.snatStore}
          bcData={bcData}
          downloadCSV={Api.downloadSnatCSV}
          funcEnName={'snat'}/>
        <AddSnatModal />
      </div>
      )
  }
}
