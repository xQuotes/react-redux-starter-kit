import { inject, observer } from 'mobx-react'

import Api from 'Api'
import Url from 'Url'

import FuncList from '../../components/switches/commonInfoTable'

@inject('QAStore')
@observer
export default class QAs extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    const { QAStore } = this.props
    QAStore.getServers()
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
          addUrl={Url.QAAdd}
        />
      </div>
    )
  }
}
