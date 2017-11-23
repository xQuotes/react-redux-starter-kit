import { toJS } from 'mobx'
import { inject, observer } from 'mobx-react'
import { Button, Popconfirm, Modal, Table } from 'antd'
import { Link } from 'react-router'

import DataTable from '../table'
import UploadBtn from '../uploadBtn'
import DownloadBtn from '../downloadBtn'
import ExportBtn from '../exportBtn'
import SearchTable from '../search'

@inject('dashboardStore')
@observer
export default class FuncList extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    const { dashboardStore, bcData } = this.props
    dashboardStore.putDashboard(bcData)
  }
  addFunc(e) {
    const { store } = this.props
    store.toggleVisible()
    store.setParams({})
  }
  updateFunc(formData) {
    const { store } = this.props
    store.toggleVisible()
    store.setParams(formData)
  }
  handleDeleteConfirm(formData) {
    const { store } = this.props
    store.deleteServer(formData)
  }
  render() {
    const that = this
    const {
      store,
      funcEnName,
      funcCnName,
      downloadCSV,
      actions,
      deleteAction,
      expandedRowRender,
      addUrl
    } = this.props
    let dataList = _.map(store.toJS(), (v, k) => {
      return {
        key: v.id,
        ...v
      }
    })
    let fields = store.fields
    let searchFields = _.map(store.searchFields, (v, k) => {
      return {
        name: k,
        label: v,
        fieldOptions: {
          initialValue: store.searchDatas[k]
        },
        placeholder: `请输入${v}`
      }
    })

    let tableHeader =
      this.props.tableHeader ||
      _.map(fields, (v, k) => {
        return {
          title: v,
          dataIndex: k,
          key: k,
          width: 105,
          render: (text, record, index) => {
            return text
          }
        }
      })
    const columns = _.isEmpty(tableHeader)
      ? []
      : [
          ...tableHeader,
          {
            title: '操作',
            key: 'operation',
            width: 200,
            render: (text, record, index) => {
              if (deleteAction) {
                return actions ? actions(record) : null
              }
              return (
                <div className="table-actions">
                  {actions && actions(record)}
                  <Link to={`${addUrl}/${record.id}`}>
                    <Button type="primary">修改</Button>
                  </Link>
                  <Link to={`${addUrl}/${record.id}?type=clone`}>
                    <Button type="primary">克隆</Button>
                  </Link>
                  <Popconfirm
                    title="确定要删除这个操作类型吗？"
                    onConfirm={that.handleDeleteConfirm.bind(this, {
                      id: record.id
                    })}
                  >
                    <a href="#">删除</a>
                  </Popconfirm>
                </div>
              )
            }
          }
        ]

    return (
      <div>
        <div className="switches-action-type">
          <Link to={`${addUrl}`}>
            <Button type="primary">添加</Button>
          </Link>
        </div>
        <div className={classNames({ tables: true })}>
          <DataTable
            columns={columns}
            dataSource={dataList}
            store={store}
            expandedRowRender={expandedRowRender}
          />
        </div>
      </div>
    )
  }
}
