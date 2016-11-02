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
import AddMappingModal from './add'
import UploadBtn from '../../components/uploadBtn'
import DownloadBtn from '../../components/downloadBtn'

@inject(
  'mappingStore', 'dashboardStore'
  )
@observer
export default class Mappings extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: false
    }
  }
  componentWillMount() {
    const bcData = ['首页', '常用信息', '映射信息']
    const {dashboardStore} = this.props
    dashboardStore.putDashboard(bcData)
  }
  addMapping(e) {
    const {mappingStore} = this.props
    mappingStore.toggleVisible()
    mappingStore.setParams({})
  }
  updateMapping(formData) {
    const {mappingStore} = this.props
    mappingStore.toggleVisible()
    mappingStore.setParams(formData)
  }
  handleDeleteConfirm(formData) {
    const {mappingStore} = this.props
    mappingStore.deleteServer(formData)
  }
  render() {
    const that = this
    const {mappingStore} = this.props
    let dataList = _.map(mappingStore.toJS(), (v, k)=> {
      return {
        key: v.id,
        ...v
      }
    })
    let fields = mappingStore.fields
    let searchFields = mappingStore.searchFields

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
            <a href="#" onClick={that.updateMapping.bind(this,{
              id: record.id
            })}>修改</a>　
            <Button type="dashed" onClick={that.updateMapping.bind(this,{
              id: record.id,
              actionType: 'clone'
            })}>克隆</Button>　
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
          <SearchTable searchFields={searchFields} store={mappingStore}/>
        </div>
        <div className="switches-action-type">
          <Button type="primary" onClick={::this.addMapping}>添加映射</Button>
          <UploadBtn
            store={mappingStore} 
            params={{
              type: "mapping"
            }}/>
          <DownloadBtn downloadUrl={Api.downloadMappingCSV}/>
        </div>
        <div className={classNames({"tables": true})}>
          <DataTable columns={columns}
            dataSource={dataList}
            store={mappingStore}/>
        </div>
        <AddMappingModal />
      </div>
      )
  }
}
