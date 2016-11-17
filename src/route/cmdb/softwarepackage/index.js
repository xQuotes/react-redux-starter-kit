import {
  inject, observer
} from 'mobx-react'

import Api from 'Api'

import FuncList from '../../components/cmdb/tableList'
import AddSoftwarepackageModal from './add'

@inject(
  'softwarepackageStore'
  )
@observer
export default class Softwarepackages extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const bcData = ['首页', '常用信息', '软件包']
    return(
      <div className="switches-network">
        <FuncList 
          store={this.props.softwarepackageStore}
          bcData={bcData}
          downloadCSV={Api.downloadSoftwarepackageCSV}
          funcEnName={'softwarepackage'}/>
        <AddSoftwarepackageModal />
      </div>
      )
  }
}
