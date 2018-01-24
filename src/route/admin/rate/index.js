import { inject, observer } from 'mobx-react'

import Api from 'Api'

import FuncList from '../../components/switches/commonInfoList'
import AddrateModal from './add'

@inject('rateStore')
@observer
export default class rates extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    const { rateStore, location: { query } } = this.props
    if (query.formulaId) {
      rateStore.getServers({
        formulaId: query.formulaId
      })
    } else {
      rateStore.getServers({
        calculatorType: query.type
      })
    }
  }
  render() {
    const bcData = ['首页', '计算器管理', '列表']
    return (
      <div className="switches-network">
        <FuncList
          store={this.props.rateStore}
          bcData={bcData}
          downloadCSV={Api.downloadrateCSV}
          funcEnName={'rate'}
        />
        <AddrateModal {...this.props} />
      </div>
    )
  }
}
