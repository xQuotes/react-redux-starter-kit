import {
  inject, observer
} from 'mobx-react'

import Api from 'Api'

import FuncList from '../../components/switches/commonInfoList'
import AddMappingModal from './add'

@inject(
  'mappingStore'
  )
@observer
export default class Mappings extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const bcData = ['首页', '常用信息', '映射信息']
    return(
      <div className="switches-network">
        <FuncList 
          store={this.props.mappingStore}
          bcData={bcData}
          downloadCSV={Api.downloadMappingCSV}
          funcEnName={'mapping'}/>
        <AddMappingModal />
      </div>
      )
  }
}
