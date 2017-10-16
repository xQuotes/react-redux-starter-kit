import { inject, observer } from 'mobx-react'

import Api from 'Api'

import FuncList from '../../components/switches/commonInfoList'
import AddNewsModal from './add'

@inject('newsStore')
@observer
export default class Newss extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const bcData = ['首页', '资讯管理', '列表']
    return (
      <div className="switches-network">
        <FuncList
          store={this.props.newsStore}
          bcData={bcData}
          downloadCSV={Api.downloadNewsCSV}
          funcEnName={'news'}
        />
        <AddNewsModal />
      </div>
    )
  }
}
