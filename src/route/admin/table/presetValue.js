import { inject, observer } from 'mobx-react'
import { Table, Button, Popconfirm } from 'antd'

import Api from 'Api'
import EditCell from './EditCell'

import { defaultOptionsValue } from './model'

const fields = {
  title: '大标题',
  description: '描述',
  list_title: '大类型标题',
  list_options_title: '小类型标题',
  list_options_selects_lable: '小类型描述',
  list_options_selects_value: '选项值',
  list_options_selects_type: '输入类型(text/select)'
}

const updateFields = _.omit(fields, ['id', 'updateTime'])

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
    // const value = presetValue || defaultOptionsValue
    // const data = []
    // console.log(value)
    // _.map(value.list, (val, key) => {
    //   _.map(val.options, (v, k) => {
    //     _.map(v.selects, (vv, kk) => {
    //       data.push({
    //         key: key + '_' + k + '_' + kk,
    //         title: value.title,
    //         description: value.description,
    //         list_title: val.title,
    //         list_options_title: v.title,
    //         list_options_selects_lable: vv.lable,
    //         list_options_selects_value: vv.value,
    //         list_options_selects_type: vv.type
    //       })
    //     })
    //   })
    // })

    // console.log(data)

    this.setState({
      dataSource: data,
      fields
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
    const { dataSource, fields } = this.state
    const newData = {
      key: +new Date(),
      ...fields,
      list_options_selects_type: 'text'
    }
    this.setState({
      dataSource: [...dataSource, newData]
    })
  }
  handleSubmit = () => {
    const { record, tableStore } = this.props
    const { presetValue, id } = record
    const { dataSource } = this.state
    console.log(record, id, JSON.stringify(dataSource))

    console.log(_.groupBy(dataSource))
    tableStore.putServer({})
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
    const { expandedRowRender } = this.props
    const columns = _.map(this.state.fields, (v, k) => {
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
    console.log(this.state.dataSource, columns)
    return (
      <div className="preset-value">
        <div className="tabel-header">
          <span className="tabel-header-title">预置选项: </span>
          <Button className="editable-add-btn" onClick={this.handleAdd}>
            添加
          </Button>
          <Button
            className="editable-add-btn"
            onClick={this.handleSubmit}
            type="primary"
          >
            保存
          </Button>
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
