import { inject, observer } from 'mobx-react'
import { Button } from 'antd'
import Api from 'Api'

import FuncList from '../../components/switches/commonInfoList'
import AddBiddingModal from './add'

@inject('biddingStore')
@observer
export default class Biddings extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    const { biddingStore } = this.props
    biddingStore.getServers({
      putaway: '1',
      type: '1' //类型 ：造价实例，造价指数，人工成本
    })
  }
  render() {
    const bcData = ['首页', '资讯管理', '列表']
    return (
      <div className="switches-network">
        <FuncList
          store={this.props.biddingStore}
          bcData={bcData}
          downloadCSV={Api.downloadBiddingCSV}
          funcEnName={'bidding'}
          actions={() => {
            return <Button>上架/下架</Button>
          }}
        />
        <AddBiddingModal />
      </div>
    )
  }
}
