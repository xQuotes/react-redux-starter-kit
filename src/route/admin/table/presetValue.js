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
    const { data, fields } = this.props

    this.setState({
      dataSource: data,
      fields
    })
  }
  onDelete = key => {
    const dataSource = [...this.state.dataSource]
    this.setState({ dataSource: dataSource.filter(item => item.key !== key) })

    this.props.onChange(dataSource.filter(item => item.key !== key))
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
  handleAdd = (key, dataIndex) => {
    const { dataSource } = this.state
    const { defaultValue } = this.props
    const newData = {
      ...defaultValue,
      key: +new Date()
    }
    this.setState({
      dataSource: [...dataSource, newData]
    })
    this.props.onChange([...dataSource, newData])
  }
  onCellChange = (key, dataIndex) => {
    return value => {
      const dataSource = [...this.state.dataSource]
      const target = dataSource.find(item => item.key === key)
      if (target) {
        target[dataIndex] = value
        this.setState({ dataSource })
        this.props.onChange(dataSource, dataIndex, key)
      }
    }
  }
  render() {
    const { expandedRowRender, title } = this.props
    const columns = _.map(this.state.fields, (v, k) => {
      if (k === 'key') {
        return {
          title: v,
          dataIndex: k,
          key: k,
          width: '300px'
        }
      }
      if (k === 'label') {
        return {
          title: v,
          dataIndex: k,
          key: k,
          width: '300px',
          render: (text, record) => (
            <EditCell
              value={text}
              onChange={this.onCellChange(record.key, k)}
            />
          )
        }
      }

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
            {/* <Button
              className="editable-add-btn"
              onClick={() => this.handleClone(record.key)}
            >
              克隆
            </Button> */}
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
          {/* <Button
            className="editable-add-btn"
            onClick={this.handleSubmit}
            type="primary"
          >
            保存
          </Button> */}
        </div>
        <Table
          expandedRowRender={expandedRowRender}
          dataSource={this.state.dataSource}
          columns={columns}
        />
      </div>
    )
  }
}
