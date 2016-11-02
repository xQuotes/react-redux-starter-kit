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
import Add/*File_append*/Modal from './add'
import UploadBtn from '../../components/uploadBtn'
import DownloadBtn from '../../components/downloadBtn'

@inject(
  '/*file_append*/Store', 'dashboardStore'
  )
@observer
export default class /*File_append*/s extends React.Component {
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
  add/*File_append*/(e) {
    const {/*file_append*/Store} = this.props
    /*file_append*/Store.toggleVisible()
    /*file_append*/Store.setParams({})
  }
  update/*File_append*/(formData) {
    const {/*file_append*/Store} = this.props
    /*file_append*/Store.toggleVisible()
    /*file_append*/Store.setParams(formData)
  }
  handleDeleteConfirm(formData) {
    const {/*file_append*/Store} = this.props
    /*file_append*/Store.deleteServer(formData)
  }
  render() {
    const that = this
    const {/*file_append*/Store} = this.props
    let dataList = /*file_append*/Store.toJS()
    let fields = /*file_append*/Store.fields
    let searchFields = /*file_append*/Store.searchFields

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
            <a href="#" onClick={that.update/*File_append*/.bind(this,{
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
          <SearchTable searchFields={searchFields} store={/*file_append*/Store}/>
        </div>
        <div className="switches-action-type">
          <Button type="primary" onClick={::this.add/*File_append*/}>添加映射</Button>
          <UploadBtn
            store={/*file_append*/Store} 
            params={{
              type: "/*file_append*/"
            }}/>
          <DownloadBtn downloadUrl={Api.download/*File_append*/CSV}/>
        </div>
        <div className={classNames({"tables": true})}>
          <DataTable columns={columns}
            dataSource={dataList}
            store={mappingStore}/>
        </div>
        <Add/*File_append*/Modal />
      </div>
      )
  }
}
