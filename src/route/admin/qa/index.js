import { inject, observer } from 'mobx-react'

import Api from 'Api'

import FuncList from '../../components/switches/commonInfoList'
import AddQAModal from './add'

@inject('QAStore')
@observer
export default class QAs extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const bcData = ['首页', '资讯管理', '列表']
    return (
      <div className="switches-network">
        <FuncList
          store={this.props.QAStore}
          bcData={bcData}
          downloadCSV={Api.downloadQACSV}
          funcEnName={'QA'}
        />
        <AddQAModal />
      </div>
    )
  }
}
