import {
  inject, observer
} from 'mobx-react'

import Api from 'Api'

import FuncList from '../../components/switches/commonInfoList'
import AddSpeciallineModal from './add'

@inject(
  'speciallineStore'
  )
@observer
export default class Speciallines extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const bcData = ['首页', '常用信息', '专线']
    return(
      <div className="switches-network">
        <FuncList 
          store={this.props.speciallineStore}
          bcData={bcData}
          downloadCSV={Api.downloadSpeciallineCSV}
          funcEnName={'specialline'}/>
        <AddSpeciallineModal />
      </div>
      )
  }
}
