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
import AddVpnModal from './add'
import UploadBtn from '../../components/uploadBtn'
import DownloadBtn from '../../components/downloadBtn'

@inject(
  'vpnStore', 'dashboardStore'
  )
@observer
export default class Vpns extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: false
    }
  }
  componentWillMount() {
    const bcData = ['首页', '常用信息', 'VPN信息']
    const {dashboardStore} = this.props
    dashboardStore.putDashboard(bcData)
  }
  addVpn(e) {
    const {vpnStore} = this.props
    vpnStore.toggleVisible()
    vpnStore.setParams({})
  }
  updateVpn(formData) {
    const {vpnStore} = this.props
    vpnStore.toggleVisible()
    vpnStore.setParams(formData)
  }
  handleDeleteConfirm(formData) {
    const {vpnStore} = this.props
    vpnStore.deleteServer(formData)
  }
  render() {
    const that = this
    const {vpnStore} = this.props
    let dataList = _.map(vpnStore.toJS(), (v, k)=> {
      return {
        key: v.id,
        ...v
      }
    })
    let fields = vpnStore.fields
    let searchFields = vpnStore.searchFields

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
            <a href="#" onClick={that.updateVpn.bind(this,{
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
          <SearchTable searchFields={searchFields} store={vpnStore}/>
        </div>
        <div className="switches-action-type">
          <Button type="primary" onClick={::this.addVpn}>添加VPN</Button>
          <UploadBtn
            store={vpnStore} 
            params={{
              type: "vpn"
            }}/>
          <DownloadBtn downloadUrl={Api.downloadVpnCSV}/>
        </div>
        <div className={classNames({"tables": true})}>
          <DataTable columns={columns}
            dataSource={dataList}
            store={mappingStore}/>
        </div>
        <AddVpnModal />
      </div>
      )
  }
}
