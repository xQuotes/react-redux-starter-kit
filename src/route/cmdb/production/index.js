import {
  inject, observer
} from 'mobx-react'

import Api from 'Api'

import FuncList from '../../components/cmdb/tableList'
import AddProductionModal from './add'

@inject(
  'productionStore'
  )
@observer
export default class Productions extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const bcData = ['首页', '常用信息', '产品线信息']
    return(
      <div className="switches-network">
        <FuncList 
          store={this.props.productionStore}
          bcData={bcData}
          downloadCSV={Api.downloadProductionCSV}
          funcEnName={'production'}/>
        <AddProductionModal />
      </div>
      )
  }
}
