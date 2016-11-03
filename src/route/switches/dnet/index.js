import {
  inject, observer
} from 'mobx-react'

import Api from 'Api'

import FuncList from '../../components/switches/commonInfoList'
import AddDnetModal from './add'

@inject(
  'dnetStore'
  )
@observer
export default class Dnets extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const bcData = ['首页', '常用信息', '映射信息']
    return(
      <div className="switches-network">
        <FuncList 
          store={this.props.dnetStore}
          bcData={bcData}
          downloadCSV={Api.downloadDnetCSV}
          funcEnName={'dnet'}/>
        <AddDnetModal />
      </div>
      )
  }
}
