import { inject, observer } from 'mobx-react'

import Api from 'Api'

import FuncList from '../../components/switches/commonInfoList'
import AddFormulaModal from './add'

@inject('formulaStore')
@observer
export default class Formulas extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    const { formulaStore, location: { query } } = this.props
    formulaStore.getServers({
      calculatorType: query.type
    })
  }
  render() {
    const bcData = ['首页', '计算器管理', '列表']
    return (
      <div className="switches-network">
        <FuncList
          store={this.props.formulaStore}
          bcData={bcData}
          downloadCSV={Api.downloadFormulaCSV}
          funcEnName={'formula'}
        />
        <AddFormulaModal />
      </div>
    )
  }
}
