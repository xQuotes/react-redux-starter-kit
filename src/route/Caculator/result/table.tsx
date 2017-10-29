import * as React from 'react'
import { Table } from 'antd'
import { TableColumnConfig } from 'antd/lib/table/Table'

interface IResult {
  key: string
  name: string
  cash: number
  result: number
}

const columns: TableColumnConfig<IResult>[] = [
  {
    title: '计算器名称',
    dataIndex: 'name'
    // render: (text: any) => <a href="#">{text}</a>
  },
  {
    title: '预算金额',
    dataIndex: 'cash'
  },
  {
    title: '计算结果',
    dataIndex: 'result'
  }
]

const data: IResult[] = [
  {
    key: '1',
    name: '勘查计算器',
    cash: 888760,
    result: 888760
  },
  {
    key: '2',
    name: '勘查计算器',
    cash: 888760,
    result: 888760
  },
  {
    key: '3',
    name: '勘查计算器',
    cash: 888760,
    result: 888760
  },
  {
    key: '4',
    name: '勘查计算器',
    cash: 888760,
    result: 888760
  }
]

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys: any, selectedRows: any) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      'selectedRows: ',
      selectedRows
    )
  },
  getCheckboxProps: (record: any) => ({
    disabled: record.name === 'Disabled User' // Column configuration not to be checked
  })
}

// const pagination = {
//   defaultPageSize: 4
// }

export default class ResultTable extends Table<IResult> {
  render() {
    return (
      <Table columns={columns} dataSource={data} rowSelection={rowSelection} />
    )
  }
}
