import {
  inject, observer
} from 'mobx-react'
import {
  Button,
  Popconfirm,
  Modal,
  Switch
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
import AddNetworkModal from './add'

@inject(
  'networkStore',
  'dashboardStore',
  'actiontypeStore'
  )
@observer
export default class Networks extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: false
    }
  }
  componentWillMount() {
    const bcData = ['首页', '常用信息', '网段信息']
    const {dashboardStore, actiontypeStore} = this.props
    dashboardStore.putDashboard(bcData)
    if (_.isEmpty(actiontypeStore.list)) {
      actiontypeStore.getServers()
    }
  }
  addNetwork(e) {
    const {networkStore} = this.props
    networkStore.toggleVisible()
    networkStore.setParams({})
  }
  updateNetwork(formData) {
    const {networkStore} = this.props
    networkStore.toggleVisible()
    networkStore.setParams(formData)
  }
  handleDeleteConfirm(formData) {
    const {networkStore} = this.props
    networkStore.deleteServer(formData)
  }
  handleChangeStatus(formData) {
    const {networkStore} = this.props
    networkStore.putServer(formData)
  }
  render() {
    const that = this
    const {networkStore, actiontypeStore} = this.props
    let dataList = _.map(networkStore.toJS(), (v, k)=> {
      return {
        key: v.id,
        ...v
      }
    })
    let fields = networkStore.fields
    fields = {
      id: "ID",
      network: "网断地址",
      start_ip: "开始IP",
      end_ip: "结束IP",
      status: "状态", // 0 禁用 1 启用
      user: "操作人员",
      c_time: "创建时间",
      type: "操作类型"
    }
    let searchFields = networkStore.searchFields
    searchFields = {
      network: "网断地址",
      start_ip: "开始IP",
      end_ip: "结束IP"
    }
    let tableHeader = _.map(fields, (v, k) => {
      return {
        title: v,
        dataIndex: k,
        key: k,
        width: 80,
        render: (text, record, index) => {
          if (k == 'status') {
            return <Switch checkedChildren="启" unCheckedChildren="停"
                      defaultChecked={text == "1" && 'checked'}
                      onChange={(checked) => {
                        that.handleChangeStatus({
                          id: record.id,
                          status: checked ? 1 : 0
                        })
                      }}/>
          }
          if (k == 'type') {
            let data = _.compact(_.map(actiontypeStore.list, function(v, k) {
              if(_.includes(text, v.id)) return v.type
            }))

            return _.join(data, ', ')
          }
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
            <a href="#" onClick={that.updateNetwork.bind(this,{
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
        {searchFields &&<div className="table-search">
          <SearchTable searchFields={searchFields} store={networkStore}/>
        </div>}
        <div className="switches-action-type">
          <Button type="primary" onClick={::this.addNetwork}>添加网段</Button>
        </div>
        <div className={classNames({"tables": true})}>
          <DataTable columns={columns}
            dataSource={dataList}/>
        </div>
        <AddNetworkModal />
      </div>
      )
  }
}
