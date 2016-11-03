import {
  inject, observer
} from 'mobx-react'

import Api from 'Api'

import FuncList from '../../components/switches/commonInfoList'
import Add/*File_append*/Modal from './add'

@inject(
  '/*file_append*/Store'
  )
@observer
export default class /*File_append*/s extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const bcData = ['首页', '常用信息', '映射信息']
    return(
      <div className="switches-network">
        <FuncList 
          store={this.props./*file_append*/Store}
          bcData={bcData}
          downloadCSV={Api.download/*File_append*/CSV}
          funcEnName={'/*file_append*/'}/>
        <Add/*File_append*/Modal />
      </div>
      )
  }
}
