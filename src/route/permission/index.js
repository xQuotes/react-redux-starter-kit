import {
  inject, observer
} from 'mobx-react'
import {
  Button
} from 'antd'

import SearchTable from '../components/search'
import DataTable from '../components/table'

@inject(
  'permissionStore'
  )
@observer
export default class Index extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: false
    }
  }
  addMapping(e) {
    const {permissionStore} = this.props
    permissionStore.toggleVisible()
    permissionStore.setParams({})
  }
  uploadMapping(e) {
    console.log(e)
  }
  updateMapping(formData) {
    const {permissionStore} = this.props
    permissionStore.toggleVisible()
    permissionStore.setParams(formData)
  }
  handleDeleteConfirm(formData) {
    const {permissionStore} = this.props
    permissionStore.deleteServer(formData)
  }
  render() {
    const that = this
    const {permissionStore} = this.props
    let dataList = permissionStore.toJS()
    let fields = permissionStore.fields
    let searchFields = permissionStore.searchFields

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
            <Popconfirm title="确定要删除这个操作类型吗？" onConfirm={that.handleDeleteConfirm.bind(this, {
              id: record.id
            })}>
              <a href="#">删除</a>
            </Popconfirm>
          </div>  
        }
      } 
    ]

    return(
      <div className="permission-admin">
        <div className="table-search">
          <SearchTable searchFields={searchFields} store={permissionStore}/>
        </div>
        <div className="action-type">
          <Button type="primary" onClick={::this.addMapping}>添加权限</Button>
        </div>
        <div className={classNames({"tables": true})}>
          <DataTable columns={columns}
            dataSource={dataList}/>
        </div>
      </div>
      )
  }
}