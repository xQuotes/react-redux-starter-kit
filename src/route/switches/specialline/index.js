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
import AddSpeciallineModal from './add'
import UploadBtn from '../../components/uploadBtn'
import DownloadBtn from '../../components/downloadBtn'

@inject(
  'speciallineStore', 'dashboardStore'
  )
@observer
export default class Speciallines extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: false
    }
  }
  componentWillMount() {
    const bcData = ['首页', '常用信息', '专线信息信息']
    const {dashboardStore} = this.props
    dashboardStore.putDashboard(bcData)
  }
  addSpecialline(e) {
    const {speciallineStore} = this.props
    speciallineStore.toggleVisible()
    speciallineStore.setParams({})
  }
  updateSpecialline(formData) {
    const {speciallineStore} = this.props
    speciallineStore.toggleVisible()
    speciallineStore.setParams(formData)
  }
  handleDeleteConfirm(formData) {
    const {speciallineStore} = this.props
    speciallineStore.deleteServer(formData)
  }
  render() {
    const that = this
    const {speciallineStore} = this.props
    let dataList = speciallineStore.toJS()
    let fields = speciallineStore.fields
    let searchFields = speciallineStore.searchFields

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
            <a href="#" onClick={that.updateSpecialline.bind(this,{
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
          <SearchTable searchFields={searchFields} store={speciallineStore}/>
        </div>
        <div className="switches-action-type">
          <Button type="primary" onClick={::this.addSpecialline}>添加专线信息</Button>
          <UploadBtn
            store={speciallineStore} 
            params={{
              type: "specialline"
            }}/>
          <DownloadBtn downloadUrl={Api.downloadSpeciallineCSV}/>
        </div>
        <div className={classNames({"tables": true})}>
          <DataTable columns={columns}
            dataSource={dataList}/>
        </div>
        <AddSpeciallineModal />
      </div>
      )
  }
}
