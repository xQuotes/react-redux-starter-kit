import {
  inject, observer
} from 'mobx-react'
import {
  Button,
  Popconfirm,
  Modal
} from 'antd'
import {
  Link
} from 'react-router'
import {
  Table
} from 'antd'

import Url from 'Url'

import SearchTable from './search'
import DataTable from '../../components/table'
import AddNetworkModal from './add'
import UploadBtn from '../../components/uploadBtn'

@inject(
  'networkStore', 'dashboardStore'
  )
@observer
export default class Networks extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: false
    }
  }
  componentWillMount() {
    const bcData = ['首页', '常用信息', '网段信息']
    const {dashboardStore} = this.props
    dashboardStore.putDashboard(bcData)
  }
  addNetwork(e) {
    const {networkStore} = this.props
    networkStore.toggleVisible()
    networkStore.setParams({})
  }
  updateNetwork(formData) {
    const {networkStore} = this.props
    networkStore.toggleVisible()
    networkStore.setParams(formData)
  }
  handleDeleteConfirm(formData) {
    const {networkStore} = this.props
    networkStore.deleteServer(formData)
  }
  render() {
    const that = this
    const {networkStore} = this.props
    let dataList = networkStore.toJS()
    let fields = networkStore.fields
    let searchFields = networkStore.searchFields

    let tableHeader = _.map(fields, (v, k) => {
      return {
        title: v,
        dataIndex: k,
        key: k,
        width: 80,
        render: (text, record, index) => {
          return text
        }
      }
    })
    const columns = _.isEmpty(tableHeader) ? [] : [
      ...tableHeader,
      {
        title: '操作',
        key: 'operation',
        width: 100,
        render: (text, record, index) => {
          return <div>  
            <a href="#" onClick={that.updateNetwork.bind(this,{
              id: record.id
            })}>修改</a>　
            <Popconfirm title="确定要删除这个操作类型吗？" onConfirm={that.handleDeleteConfirm.bind(this, {
              id: record.id
            })}>
              <a href="#">删除</a>
            </Popconfirm>
          </div>  
        }
      } 
    ];

    return(
      <div className="switches-network">
        <div className="table-search">
          <SearchTable searchFields={searchFields} store={networkStore}/>
        </div>
        <div className="switches-action-type">
          <Button type="primary" onClick={::this.addNetwork}>添加网段</Button>
          <UploadBtn
            store={networkStore} 
            params={{
              type: "network"
            }}/>
        </div>
        <div className={classNames({"tables": true})}>
          <DataTable columns={columns}
            dataSource={dataList}/>
        </div>
        <AddNetworkModal />
      </div>
      )
  }
}
