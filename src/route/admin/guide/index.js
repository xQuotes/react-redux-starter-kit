import { inject, observer } from 'mobx-react'

import Api from 'Api'

import FuncList from '../../components/switches/commonInfoList'
import AddGuideModal from './add'

@inject('guideStore')
@observer
export default class Guides extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    const { guideStore } = this.props
    guideStore.getServers({
      calculatorType: 1
      //pageNum
      //pageSize
    })
  }
  render() {
    const bcData = ['首页', '计算器管理', '列表']
    return (
      <div className="switches-network">
        <FuncList
          store={this.props.guideStore}
          bcData={bcData}
          downloadCSV={Api.downloadGuideCSV}
          funcEnName={'guide'}
        />
        <AddGuideModal {...this.props} />
      </div>
    )
  }
}
