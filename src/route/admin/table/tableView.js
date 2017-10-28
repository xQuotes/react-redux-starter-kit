import { inject, observer } from 'mobx-react'
import { Table, Button, Popconfirm } from 'antd'

import Api from 'Api'
import EditCell from './EditCell'

import './presetValue.less'

@inject('tableStore')
@observer
export default class TableView extends React.Component {
  render() {
    const { title, expandedRowRender, fields, data } = this.props
    const columns = _.map(fields, (v, k) => {
      if (k === 'label') {
        return {
          title: v,
          dataIndex: k,
          key: k,
          width: '300px',
          render: (text, record) => <EditCell value={text} />
        }
      }

      return {
        title: v,
        dataIndex: k,
        width: '200px',
        key: k,
        render: (text, record) => <EditCell value={text} />
      }
    })

    return (
      <div className="preset-value">
        <div className="tabel-header">
          {_.map(data, (v, k) => {
            if (typeof v === 'string') {
              return (
                <span className="tabel-header-title" key={k}>
                  <EditCell value={v} />
                </span>
              )
            } else {
              return null
            }
          })}
          <Button className="editable-add-btn" onClick={this.handleAdd}>
            添加
          </Button>
        </div>
        {_.map(data, (v, k) => {
          if (Array.isArray(v)) {
            return (
              <Table
                key={k}
                dataSource={v}
                columns={columns}
                expandedRowRender={expandedRowRender}
              />
            )
          } else {
            return null
          }
        })}
      </div>
    )
  }
}
