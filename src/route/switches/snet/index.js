import {
  inject, observer
} from 'mobx-react'

import Api from 'Api'

import FuncList from '../../components/switches/commonInfoList'
import AddSnetModal from './add'

@inject(
  'snetStore'
  )
@observer
export default class Snets extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const bcData = ['首页', '常用信息', 'S-NET']
    return(
      <div className="switches-network">
        <FuncList 
          store={this.props.snetStore}
          bcData={bcData}
          downloadCSV={Api.downloadSnetCSV}
          funcEnName={'snet'}/>
        <AddSnetModal />
      </div>
      )
  }
}
