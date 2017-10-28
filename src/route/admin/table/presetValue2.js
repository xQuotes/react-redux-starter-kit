import { inject, observer } from 'mobx-react'
import { Table, Button, Popconfirm } from 'antd'

import Api from 'Api'
import EditCell from './EditCell'

import './presetValue.less'

@inject('tableStore')
@observer
export default class PresetValue extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dataSource: []
    }
  }
  componentWillMount() {
    const { data } = this.props
    this.setState({
      dataSource: data
    })
  }
  onDelete = key => {
    const dataSource = [...this.state.dataSource]
    this.setState({ dataSource: dataSource.filter(item => item.key !== key) })
  }
  handleClone = key => {
    const { dataSource } = this.state
    const newData = {
      ...dataSource.find(item => item.key === key),
      key: +new Date()
    }
    this.setState({
      dataSource: [...dataSource, newData]
    })
  }
  handleAdd = () => {
    const { dataSource } = this.state
    const { fields } = this.props
    const newData = {
      key: +new Date(),
      ...fields
    }
    this.setState({
      dataSource: [...dataSource, newData]
    })
  }
  onCellChange = (key, dataIndex) => {
    return value => {
      const dataSource = [...this.state.dataSource]
      const target = dataSource.find(item => item.key === key)
      if (target) {
        target[dataIndex] = value
        this.setState({ dataSource })
      }
    }
  }
  render() {
    const { title, expandedRowRender, fields } = this.props
    const columns = _.map(fields, (v, k) => {
      return {
        title: v,
        dataIndex: k,
        width: '200px',
        key: k,
        render: (text, record) => (
          <EditCell value={text} onChange={this.onCellChange(record.key, k)} />
        )
      }
    })

    columns.push({
      title: '操作',
      dataIndex: 'operation',
      width: '100px',
      render: (text, record) => {
        return (
          <div>
            <Button
              className="editable-add-btn"
              onClick={() => this.handleClone(record.key)}
            >
              克隆
            </Button>
            <Popconfirm
              title="确定要删除吗?"
              onConfirm={() => this.onDelete(record.key)}
            >
              <a href="#">删除</a>
            </Popconfirm>
          </div>
        )
      }
    })
    return (
      <div className="preset-value">
        <div className="tabel-header">
          <span className="tabel-header-title">{title}</span>
          <Button className="editable-add-btn" onClick={this.handleAdd}>
            添加
          </Button>
        </div>
        <Table
          dataSource={this.state.dataSource}
          columns={columns}
          expandedRowRender={expandedRowRender}
        />
      </div>
    )
  }
}
