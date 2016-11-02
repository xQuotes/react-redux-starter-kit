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
import DataTable from '../../components/updateAllTable'
import AddNetworkequipmentModal from './add'
import UploadBtn from '../../components/uploadBtn'
import DownloadBtn from '../../components/downloadBtn'

@inject(
  'networkequipmentStore', 'dashboardStore'
  )
@observer
export default class Networkequipments extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: false
    }
  }
  componentWillMount() {
    const bcData = ['首页', '常用信息', '网络设备信息']
    const {dashboardStore} = this.props
    dashboardStore.putDashboard(bcData)
  }
  addNetworkequipment(e) {
    const {networkequipmentStore} = this.props
    networkequipmentStore.toggleVisible()
    networkequipmentStore.setParams({})
  }
  updateNetworkequipment(formData) {
    const {networkequipmentStore} = this.props
    networkequipmentStore.toggleVisible()
    networkequipmentStore.setParams(formData)
  }
  handleDeleteConfirm(formData) {
    const {networkequipmentStore} = this.props
    networkequipmentStore.deleteServer(formData)
  }
  render() {
    const that = this
    const {networkequipmentStore} = this.props
    let dataList = _.map(networkequipmentStore.toJS(), (v, k)=> {
      return {
        key: v.id,
        ...v
      }
    })
    let fields = networkequipmentStore.fields
    let searchFields = networkequipmentStore.searchFields

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
            <a href="#" onClick={that.updateNetworkequipment.bind(this,{
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
          <SearchTable searchFields={searchFields} store={networkequipmentStore}/>
        </div>
        <div className="switches-action-type">
          <Button type="primary" onClick={::this.addNetworkequipment}>添加网络设备</Button>
          <UploadBtn
            store={networkequipmentStore} 
            params={{
              type: "networkequipment"
            }}/>
          <DownloadBtn downloadUrl={Api.downloadNetworkequipmentCSV}/>
        </div>
        <div className={classNames({"tables": true})}>
          <DataTable columns={columns}
            dataSource={dataList}/>
        </div>
        <AddNetworkequipmentModal />
      </div>
      )
  }
}
