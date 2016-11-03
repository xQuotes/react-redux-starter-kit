import {
  inject, observer
} from 'mobx-react'

import Api from 'Api'

import FuncList from '../../components/switches/commonInfoList'
import AddNetworksecModal from './add'

@inject(
  'networksecStore'
  )
@observer
export default class Networksecs extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const bcData = ['首页', '常用信息', '映射信息']
    return(
      <div className="switches-network">
        <FuncList 
          store={this.props.networksecStore}
          bcData={bcData}
          downloadCSV={Api.downloadNetworksecCSV}
          funcEnName={'networksec'}/>
        <AddNetworksecModal />
      </div>
      )
  }
}
