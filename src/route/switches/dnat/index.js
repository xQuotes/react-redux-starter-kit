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
import AddDnatModal from './add'
import UploadBtn from '../../components/uploadBtn'

@inject(
  'dnatStore', 'dashboardStore'
  )
@observer
export default class Dnats extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: false
    }
  }
  componentWillMount() {
    const bcData = ['首页', '常用信息', 'D-NAT信息信息']
    const {dashboardStore} = this.props
    dashboardStore.putDashboard(bcData)
  }
  addDnat(e) {
    const {dnatStore} = this.props
    dnatStore.toggleVisible()
    dnatStore.setParams({})
  }
  updateDnat(formData) {
    const {dnatStore} = this.props
    dnatStore.toggleVisible()
    dnatStore.setParams(formData)
  }
  handleDeleteConfirm(formData) {
    const {dnatStore} = this.props
    dnatStore.deleteServer(formData)
  }
  render() {
    const that = this
    const {dnatStore} = this.props
    let dataList = dnatStore.toJS()
    let fields = dnatStore.fields
    let searchFields = dnatStore.searchFields

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
            <a href="#" onClick={that.updateDnat.bind(this,{
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
          <SearchTable searchFields={searchFields} store={dnatStore}/>
        </div>
        <div className="switches-action-type">
          <Button type="primary" onClick={::this.addDnat}>添加D-NAT信息</Button>
          <UploadBtn
            store={dnatStore} 
            params={{
              type: "dnat"
            }}/>
        </div>
        <div className={classNames({"tables": true})}>
          <DataTable columns={columns}
            dataSource={dataList}/>
        </div>
        <AddDnatModal />
      </div>
      )
  }
}
