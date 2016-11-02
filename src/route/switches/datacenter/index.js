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
import AddDatacenterModal from './add'
import UploadBtn from '../../components/uploadBtn'
import DownloadBtn from '../../components/downloadBtn'

@inject(
  'datacenterStore', 'dashboardStore'
  )
@observer
export default class Datacenters extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: false
    }
  }
  componentWillMount() {
    const bcData = ['首页', '常用信息', '机房信息信息']
    const {dashboardStore} = this.props
    dashboardStore.putDashboard(bcData)
  }
  addDatacenter(e) {
    const {datacenterStore} = this.props
    datacenterStore.toggleVisible()
    datacenterStore.setParams({})
  }
  updateDatacenter(formData) {
    const {datacenterStore} = this.props
    datacenterStore.toggleVisible()
    datacenterStore.setParams(formData)
  }
  handleDeleteConfirm(formData) {
    const {datacenterStore} = this.props
    datacenterStore.deleteServer(formData)
  }
  render() {
    const that = this
    const {datacenterStore} = this.props
    let dataList = datacenterStore.toJS()
    let fields = datacenterStore.fields
    let searchFields = datacenterStore.searchFields

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
            <a href="#" onClick={that.updateDatacenter.bind(this,{
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
          <SearchTable searchFields={searchFields} store={datacenterStore}/>
        </div>
        <div className="switches-action-type">
          <Button type="primary" onClick={::this.addDatacenter}>添加机房信息</Button>
          <UploadBtn
            store={datacenterStore} 
            params={{
              type: "datacenter"
            }}/>
          <DownloadBtn downloadUrl={Api.downloadDatacenterCSV}/>
        </div>
        <div className={classNames({"tables": true})}>
          <DataTable columns={columns}
            dataSource={dataList}/>
        </div>
        <AddDatacenterModal />
      </div>
      )
  }
}
