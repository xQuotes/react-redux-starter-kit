import {
  inject, observer
} from 'mobx-react'

import Api from 'Api'

import FuncList from '../../components/cmdb/tableList'
import AddSpaceshowModal from './add'

@inject(
  'spaceshowStore'
  )
@observer
export default class Spaceshows extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const bcData = ['首页', '常用信息', '空间显示']
    return(
      <div className="switches-network">
        <FuncList 
          store={this.props.spaceshowStore}
          bcData={bcData}
          downloadCSV={Api.downloadSpaceshowCSV}
          funcEnName={'spaceshow'}/>
        <AddSpaceshowModal />
      </div>
      )
  }
}
