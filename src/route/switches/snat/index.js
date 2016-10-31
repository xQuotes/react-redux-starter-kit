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
import AddSnatModal from './add'
import UploadBtn from '../../components/uploadBtn'

@inject(
  'snatStore', 'dashboardStore'
  )
@observer
export default class Snats extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: false
    }
  }
  componentWillMount() {
    const bcData = ['首页', '常用信息', 'S-NAT信息信息']
    const {dashboardStore} = this.props
    dashboardStore.putDashboard(bcData)
  }
  addSnat(e) {
    const {snatStore} = this.props
    snatStore.toggleVisible()
    snatStore.setParams({})
  }
  updateSnat(formData) {
    const {snatStore} = this.props
    snatStore.toggleVisible()
    snatStore.setParams(formData)
  }
  handleDeleteConfirm(formData) {
    const {snatStore} = this.props
    snatStore.deleteServer(formData)
  }
  render() {
    const that = this
    const {snatStore} = this.props
    let dataList = snatStore.toJS()
    let fields = snatStore.fields
    let searchFields = snatStore.searchFields

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
            <a href="#" onClick={that.updateSnat.bind(this,{
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
          <SearchTable searchFields={searchFields} store={snatStore}/>
        </div>
        <div className="switches-action-type">
          <Button type="primary" onClick={::this.addSnat}>添加S-NAT信息</Button>
          <UploadBtn
            store={snatStore} 
            params={{
              type: "snat"
            }}/>
        </div>
        <div className={classNames({"tables": true})}>
          <DataTable columns={columns}
            dataSource={dataList}/>
        </div>
        <AddSnatModal />
      </div>
      )
  }
}
