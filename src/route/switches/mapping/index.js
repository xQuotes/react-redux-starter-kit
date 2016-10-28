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
import AddMappingModal from './add'
import UploadBtn from '../../components/uploadBtn'

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
  uploadMapping(e) {
    console.log(e)
  }
  updateMapping(data) {
    const {mappingStore} = this.props
    mappingStore.toggleVisible()
    mappingStore.setParams(data)
  }
  handleDeleteConfirm(formData) {
    const {mappingStore} = this.props
    mappingStore.deleteServer(formData)
  }
  render() {
    const that = this
    const {mappingStore} = this.props
    
    let dataList = mappingStore.toJS()
    let fields = mappingStore.fields
    let searchFields = mappingStore.searchFields
    // let fields = {
    //   id: "ID",
    //   hostname: "主机名",
    //   ext_ip: "公网IP",
    //   ext_port: "公网端口",
    //   int_ip: "内网IP",
    //   int_port: "内网端口",
    //   user: "操作人员",
    //   c_time: "创建时间",
    //   u_time: "更新时间",
    // }

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
              id: record.id,
              index
            })}>修改</a>　
            <Popconfirm title="确定要删除这个操作类型吗？" onConfirm={that.handleDeleteConfirm.bind(this, {
              id: record.id,
              index
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
          <UploadBtn />
        </div>
        <div className={classNames({"tables": true})}>
          <Table columns={columns}
            dataSource={dataList}
            scroll={{ x: 1000 }}/>
        </div>
        <AddMappingModal />
      </div>
      )
  }
}
