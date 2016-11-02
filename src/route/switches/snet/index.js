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
import AddSnetModal from './add'
import UploadBtn from '../../components/uploadBtn'
import DownloadBtn from '../../components/downloadBtn'

@inject(
  'snetStore', 'dashboardStore'
  )
@observer
export default class Snets extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: false
    }
  }
  componentWillMount() {
    const bcData = ['首页', '常用信息', 'S-NET信息信息']
    const {dashboardStore} = this.props
    dashboardStore.putDashboard(bcData)
  }
  addSnet(e) {
    const {snetStore} = this.props
    snetStore.toggleVisible()
    snetStore.setParams({})
  }
  updateSnet(formData) {
    const {snetStore} = this.props
    snetStore.toggleVisible()
    snetStore.setParams(formData)
  }
  handleDeleteConfirm(formData) {
    const {snetStore} = this.props
    snetStore.deleteServer(formData)
  }
  render() {
    const that = this
    const {snetStore} = this.props
    let dataList = _.map(snetStore.toJS(), (v, k)=> {
      return {
        key: v.id,
        ...v
      }
    })
    let fields = snetStore.fields
    let searchFields = snetStore.searchFields

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
            <a href="#" onClick={that.updateSnet.bind(this,{
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
          <SearchTable searchFields={searchFields} store={snetStore}/>
        </div>
        <div className="switches-action-type">
          <Button type="primary" onClick={::this.addSnet}>添加S-NET信息</Button>
          <UploadBtn
            store={snetStore} 
            params={{
              type: "snet"
            }}/>
          <DownloadBtn downloadUrl={Api.downloadSnetCSV}/>
        </div>
        <div className={classNames({"tables": true})}>
          <DataTable columns={columns}
            dataSource={dataList}/>
        </div>
        <AddSnetModal />
      </div>
      )
  }
}
