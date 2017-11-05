import { inject, observer } from 'mobx-react'
import { Button } from 'antd'
import Api from 'Api'

import FuncList from '../../components/switches/commonInfoList'
import AddNewsModal from './add'

@inject('newsStore')
@observer
export default class Newss extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    const { newsStore } = this.props
    newsStore.getServers({
      putaway: null,
      type: 1 //类型 ：造价实例，造价指数，人工成本
    })
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
          actions={() => {
            return <Button>上架/下架</Button>
          }}
        />
        <AddNewsModal />
      </div>
    )
  }
}
