import {
  inject, observer
} from 'mobx-react'

import Api from 'Api'

import FuncList from '../../components/cmdb/tableList'
import AddInstructionModal from './add'

@inject(
  'instructionStore'
  )
@observer
export default class Instructions extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const bcData = ['首页', '常用信息', '使用说明']
    return(
      <div className="switches-network">
        <FuncList 
          store={this.props.instructionStore}
          bcData={bcData}
          downloadCSV={Api.downloadInstructionCSV}
          funcEnName={'instruction'}/>
        <AddInstructionModal />
      </div>
      )
  }
}
