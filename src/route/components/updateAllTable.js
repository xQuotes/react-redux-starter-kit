import {
  observer
} from 'mobx-react'
import {
  Table,
  Button,
  Pagination
} from 'antd'

@observer
export default class DataTable extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      ids: '',
      current: 1,
      pageSize: 10
    }
  }
  updateAll() {
    const {store} = this.props
    const {ids} = this.state
    !_.isEmpty(ids) && store.toggleVisible()
    !_.isEmpty(ids) && store.setParams({
      ids: this.state.ids
    })
  }
  render() {
    const that = this
    const {columns, dataSource} = this.props
    const pagination = {
      total: dataSource.length,
      showTotal: () => `总共 ${dataSource.length} 条`,
      showSizeChanger: true,
      pageSizeOptions: [dataSource.length+'', '10', '20', '50', '100'],
      pageSize: that.state.pageSize,
      current: that.state.current,
      onShowSizeChange(current, pageSize) {
        that.setState({
          current,
          pageSize
        })
      },
      onChange(current) {
        that.setState({
          current
        })
      }
    }
    const rowSelection = {
      onChange(selectedRowKeys, selectedRows) {
        that.setState({
          ids: selectedRowKeys
        })
      },
      // onSelect(record, selected, selectedRows) {
      //   console.log(`onSelect: ${record}`, selected, selectedRows);
      // },
      // onSelectAll(selected, selectedRows, changeRows) {
      //   console.log(`onSelectAll: ${selected}`, selectedRows, changeRows);
      // },
    }

    return(
      <Table columns={columns}
        rowSelection={rowSelection}
        dataSource={dataSource}
        pagination={pagination}
        scroll={{ x: 1400 }}
        title={() => {
          return <div style={{
            overflow: 'hidden'
          }}>
            <Button type="primary" onClick={::this.updateAll} style={{
              float: 'left'
            }}>批量修改</Button>
            <Pagination {...pagination} style={{
              float: 'right'
            }}/>
            </div>
        }}/>
      )
  }
}
