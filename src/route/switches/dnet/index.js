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
import AddDnetModal from './add'
import UploadBtn from '../../components/uploadBtn'

@inject(
  'dnetStore', 'dashboardStore'
  )
@observer
export default class Dnets extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: false
    }
  }
  componentWillMount() {
    const bcData = ['首页', '常用信息', 'D-NET信息信息']
    const {dashboardStore} = this.props
    dashboardStore.putDashboard(bcData)
  }
  addDnet(e) {
    const {dnetStore} = this.props
    dnetStore.toggleVisible()
    dnetStore.setParams({})
  }
  updateDnet(formData) {
    const {dnetStore} = this.props
    dnetStore.toggleVisible()
    dnetStore.setParams(formData)
  }
  handleDeleteConfirm(formData) {
    const {dnetStore} = this.props
    dnetStore.deleteServer(formData)
  }
  render() {
    const that = this
    const {dnetStore} = this.props
    let dataList = dnetStore.toJS()
    let fields = dnetStore.fields
    let searchFields = dnetStore.searchFields

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
            <a href="#" onClick={that.updateDnet.bind(this,{
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
          <SearchTable searchFields={searchFields} store={dnetStore}/>
        </div>
        <div className="switches-action-type">
          <Button type="primary" onClick={::this.addDnet}>添加D-NET信息</Button>
          <UploadBtn
            store={dnetStore} 
            params={{
              type: "dnet"
            }}/>
        </div>
        <div className={classNames({"tables": true})}>
          <DataTable columns={columns}
            dataSource={dataList}/>
        </div>
        <AddDnetModal />
      </div>
      )
  }
}
