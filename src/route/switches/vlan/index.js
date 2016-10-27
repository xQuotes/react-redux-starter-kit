import {
  inject, observer
} from 'mobx-react'
import {
  Link
} from 'react-router'
import {
  Table
} from 'antd'

import Url from 'Url'

import SearchTable from './search'

@inject(
  'vlanStore', 'dashboardStore'
  )
@observer
export default class Vlans extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    const bcData = ['首页', '常用服务', 'vlan信息']
    const {dashboardStore} = this.props
    dashboardStore.putDashboard(bcData)
  }
  render() {
    const {vlanStore} = this.props
    let dataList = vlanStore.toJS()

    let fields = {
      id: 'ID',
      hostname: '主机名',
      switchIp: '交换机IP',
      mac: 'MAC地址',
      serverIp: '服务器IP',
      interfaces: '接口',
      vlan: 'vlan',
      g_time: '创建时间'
    }

    let tableHeader = _.map(fields, (v, k) => {
      return {
        title: v,
        dataIndex: k,
        key: k,
        width: 80
      }
    })
    const columns = _.isEmpty(tableHeader) ? [] : [
      ...tableHeader
    ];

    return(
      <div className="switches-network">
        <div className="table-search">
          <SearchTable />
        </div>
        <div className={classNames({"tables": true})}>
          <Table columns={columns}
            dataSource={dataList}
            scroll={{ x: 1000 }}/>
        </div>
      </div>
      )
  }
}
