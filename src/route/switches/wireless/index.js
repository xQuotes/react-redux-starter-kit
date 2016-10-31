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
import AddWirelessModal from './add'
import UploadBtn from '../../components/uploadBtn'

@inject(
  'wirelessStore', 'dashboardStore'
  )
@observer
export default class Wirelesss extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: false
    }
  }
  componentWillMount() {
    const bcData = ['首页', '常用信息', '无线信息信息']
    const {dashboardStore} = this.props
    dashboardStore.putDashboard(bcData)
  }
  addWireless(e) {
    const {wirelessStore} = this.props
    wirelessStore.toggleVisible()
    wirelessStore.setParams({})
  }
  updateWireless(formData) {
    const {wirelessStore} = this.props
    wirelessStore.toggleVisible()
    wirelessStore.setParams(formData)
  }
  handleDeleteConfirm(formData) {
    const {wirelessStore} = this.props
    wirelessStore.deleteServer(formData)
  }
  render() {
    const that = this
    const {wirelessStore} = this.props
    let dataList = wirelessStore.toJS()
    let fields = wirelessStore.fields
    let searchFields = wirelessStore.searchFields

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
            <a href="#" onClick={that.updateWireless.bind(this,{
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
          <SearchTable searchFields={searchFields} store={wirelessStore}/>
        </div>
        <div className="switches-action-type">
          <Button type="primary" onClick={::this.addWireless}>添加无线信息</Button>
          <UploadBtn
            store={wirelessStore} 
            params={{
              type: "wireless"
            }}/>
        </div>
        <div className={classNames({"tables": true})}>
          <DataTable columns={columns}
            dataSource={dataList}/>
        </div>
        <AddWirelessModal />
      </div>
      )
  }
}
