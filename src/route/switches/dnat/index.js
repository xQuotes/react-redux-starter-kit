import {
  inject, observer
} from 'mobx-react'

import Api from 'Api'

import FuncList from '../../components/switches/commonInfoList'
import AddDnatModal from './components/add'

@inject(
  'dnatStore'
  )
@observer
export default class Dnats extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const bcData = ['首页', '常用信息', 'D-NAT']
    return(
      <div className="switches-network">
        <FuncList 
          store={this.props.dnatStore}
          bcData={bcData}
          downloadCSV={Api.downloadDnatCSV}
          funcEnName={'dnat'}/>
        <AddDnatModal />
      </div>
      )
  }
}
