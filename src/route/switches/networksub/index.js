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
import Api from 'Api'

import SearchTable from './search'
import DataTable from '../../components/table'
import AddNetworksubModal from './add'
import UploadBtn from '../../components/uploadBtn'
import DownloadBtn from '../../components/downloadBtn'

@inject(
  'networksubStore', 'dashboardStore'
  )
@observer
export default class Networksubs extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: false
    }
  }
  componentWillMount() {
    const bcData = ['首页', '常用信息', '子网信息']
    const {dashboardStore} = this.props
    dashboardStore.putDashboard(bcData)
  }
  addNetworksub(e) {
    const {networksubStore} = this.props
    networksubStore.toggleVisible()
    networksubStore.setParams({})
  }
  updateNetworksub(formData) {
    const {networksubStore} = this.props
    networksubStore.toggleVisible()
    networksubStore.setParams(formData)
  }
  handleDeleteConfirm(formData) {
    const {networksubStore} = this.props
    networksubStore.deleteServer(formData)
  }
  render() {
    const that = this
    const {networksubStore} = this.props
    let dataList = networksubStore.toJS()
    let fields = networksubStore.fields
    let searchFields = networksubStore.searchFields

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
            <a href="#" onClick={that.updateNetworksub.bind(this,{
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
          <SearchTable searchFields={searchFields} store={networksubStore}/>
        </div>
        <div className="switches-action-type">
          <Button type="primary" onClick={::this.addNetworksub}>添加子网</Button>
          <UploadBtn
            store={networksubStore} 
            params={{
              type: "networksub"
            }}/>
          <DownloadBtn downloadUrl={Api.downloadNetworksubCSV}/>
        </div>
        <div className={classNames({"tables": true})}>
          <DataTable columns={columns}
            dataSource={dataList}/>
        </div>
        <AddNetworksubModal />
      </div>
      )
  }
}
