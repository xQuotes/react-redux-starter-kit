import { inject, observer } from 'mobx-react'

import Api from 'Api'

import FuncList from '../../components/switches/commonInfoList'
import AddCaculatorModal from './add'

@inject('caculatorStore')
@observer
export default class Caculators extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const bcData = ['首页', '计算器管理', '列表']
    return (
      <div className="switches-network">
        <FuncList
          store={this.props.caculatorStore}
          bcData={bcData}
          downloadCSV={Api.downloadCaculatorCSV}
          funcEnName={'caculator'}
        />
        <AddCaculatorModal />
      </div>
    )
  }
}
