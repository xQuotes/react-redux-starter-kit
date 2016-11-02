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
import AddServerModal from './add'
import UploadBtn from '../../components/uploadBtn'
import DownloadBtn from '../../components/downloadBtn'

@inject(
  'serverStore', 'dashboardStore'
  )
@observer
export default class Servers extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: false
    }
  }
  componentWillMount() {
    const bcData = ['首页', '常用信息', '服务器信息']
    const {dashboardStore} = this.props
    dashboardStore.putDashboard(bcData)
  }
  addServer(e) {
    const {serverStore} = this.props
    serverStore.toggleVisible()
    serverStore.setParams({})
  }
  updateServer(formData) {
    const {serverStore} = this.props
    serverStore.toggleVisible()
    serverStore.setParams(formData)
  }
  handleDeleteConfirm(formData) {
    const {serverStore} = this.props
    serverStore.deleteServer(formData)
  }
  render() {
    const that = this
    const {serverStore} = this.props
    let dataList = _.map(serverStore.toJS(), (v, k)=> {
      return {
        key: v.id,
        ...v
      }
    })
    let fields = serverStore.fields
    let searchFields = serverStore.searchFields

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
            <a href="#" onClick={that.updateServer.bind(this,{
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
          <SearchTable searchFields={searchFields} store={serverStore}/>
        </div>
        <div className="switches-action-type">
          <Button type="primary" onClick={::this.addServer}>添加服务器</Button>
          <UploadBtn
            store={serverStore} 
            params={{
              type: "server"
            }}/>
          <DownloadBtn downloadUrl={Api.downloadServerCSV}/>
        </div>
        <div className={classNames({"tables": true})}>
          <DataTable columns={columns}
            dataSource={dataList}
            store={serverStore}/>
        </div>
        <AddServerModal />
      </div>
      )
  }
}
