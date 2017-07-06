import {
  toJS
} from 'mobx'
import {
  inject, observer
} from 'mobx-react'
import {
  Button,
  Popconfirm,
  Modal,
  Table
} from 'antd'

import DataTable from './table'
import SearchTable from './search'

@inject(
  'dashboardStore'
  )
@observer
export default class FuncList extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    const {dashboardStore, bcData} = this.props
    dashboardStore.putDashboard(bcData)
  }
  addFunc(e) {
    const {store} = this.props
    store.toggleVisible()
    store.setParams({})
  }
  updateFunc(formData) {
    const {store} = this.props
    store.toggleVisible()
    store.setParams(formData)
  }
  handleDeleteConfirm(formData) {
    const {store} = this.props
    store.deleteServer(formData)
  }
  render() {
    const that = this
    const {
      store, funcEnName, funcCnName, downloadCSV
    } = this.props
    let dataList = _.map(store.toJS(), (v, k)=> {
      return {
        key: v.id,
        ...v
      }
    })
    let fields = toJS(store.fields)
    console.log(store.searchFields)
    let searchFields = _.map(store.searchFields, (v, k)=> {
      return {
        name: k,
        label: v,
        fieldOptions: {
          initialValue: store.searchDatas[k]
        },
        placeholder: `请输入${v}`
      }
    })

    let tableHeader = _.map(store.fields, (v, k) => {
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
        width: 150,
        render: (text, record, index) => {
          return <div>  
            <a href="#" onClick={that.updateFunc.bind(this,{
              id: record.id
            })}>修改</a>　
            <Button type="dashed" onClick={that.updateFunc.bind(this,{
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
      <div>
        <div className="table-search">
          <SearchTable title={searchFields} store={store}/>
        </div>
        <div className="switches-action-type">
          <Button type="primary" onClick={::this.addFunc}>
            添加
          </Button>
        </div>
        <div className={classNames({"tables": true})}>
          <DataTable columns={columns}
            dataSource={dataList}
            store={store}/>
        </div>
      </div>
      )
  }
}
