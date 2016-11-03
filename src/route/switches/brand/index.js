import {
  inject, observer
} from 'mobx-react'

import Api from 'Api'

import FuncList from '../../components/switches/commonInfoList'
import AddBrandModal from './add'

@inject(
  'brandStore'
  )
@observer
export default class Brands extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const bcData = ['首页', '常用信息', /*file_title*/]
    return(
      <div className="switches-network">
        <FuncList 
          store={this.props.brandStore}
          bcData={bcData}
          downloadCSV={Api.downloadBrandCSV}
          funcEnName={'brand'}/>
        <AddBrandModal />
      </div>
      )
  }
}
