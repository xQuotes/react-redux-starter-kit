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
import AddNetworksecModal from './add'
import UploadBtn from '../../components/uploadBtn'
import DownloadBtn from '../../components/downloadBtn'

@inject(
  'networksecStore', 'dashboardStore'
  )
@observer
export default class Networksecs extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: false
    }
  }
  componentWillMount() {
    const bcData = ['首页', '常用信息', '网络安全策略信息']
    const {dashboardStore} = this.props
    dashboardStore.putDashboard(bcData)
  }
  addNetworksec(e) {
    const {networksecStore} = this.props
    networksecStore.toggleVisible()
    networksecStore.setParams({})
  }
  updateNetworksec(formData) {
    const {networksecStore} = this.props
    networksecStore.toggleVisible()
    networksecStore.setParams(formData)
  }
  handleDeleteConfirm(formData) {
    const {networksecStore} = this.props
    networksecStore.deleteServer(formData)
  }
  render() {
    const that = this
    const {networksecStore} = this.props
    let dataList = _.map(networksecStore.toJS(), (v, k)=> {
      return {
        key: v.id,
        ...v
      }
    })
    let fields = networksecStore.fields
    let searchFields = networksecStore.searchFields

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
            <a href="#" onClick={that.updateNetworksec.bind(this,{
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
          <SearchTable searchFields={searchFields} store={networksecStore}/>
        </div>
        <div className="switches-action-type">
          <Button type="primary" onClick={::this.addNetworksec}>添加网络安全策略</Button>
          <UploadBtn
            store={networksecStore} 
            params={{
              type: "networksec"
            }}/>
          <DownloadBtn downloadUrl={Api.downloadNetworksecCSV}/>
        </div>
        <div className={classNames({"tables": true})}>
          <DataTable columns={columns}
            dataSource={dataList}
            store={mappingStore}/>
        </div>
        <AddNetworksecModal />
      </div>
      )
  }
}
