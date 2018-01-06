import { inject, observer } from 'mobx-react'
import { Button, Row, Col, Input } from 'antd'

import Api from 'Api'

import FuncList from '../../components/switches/commonInfoList'
import AddTableModal from './add'
import JSONView from '../../components/jsonview/index'
import PresetValue from '../table/presetValue'

@inject('coreTableStore', 'presetStore')
@observer
export default class Tables extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    const { coreTableStore, location: { query } } = this.props
    if (query.code) {
      coreTableStore.getServers({
        areaCode: query.areaCode || '',
        type: query.type || ''
      })
    } else {
      coreTableStore.getServers({
        areaCode: query.areaCode || '',
        type: query.type || ''
      })
    }
  }
  handleSubmit(item) {
    const { coreTableStore, presetStore } = this.props
    delete item.key
    item.presetValue = JSON.stringify({
      title: presetStore.title,
      description: presetStore.description,
      list: presetStore.list
    })
    coreTableStore.putServer(item)
  }
  onChange(value, options) {
    const { coreTableStore, presetStore } = this.props
    const { type, list_id, options_id, selects_id, key } = options
    if (type === 'list') {
      if (list_id === 'addOrDelete') {
        presetStore.list = value
      } else {
        const index = presetStore.list.findIndex(v => v.key === list_id)

        if (index >= 0) presetStore.list[index] = value[index]
      }
    }
    if (type === 'options') {
      const list = presetStore.list
      const index = list.findIndex(v => v.key === list_id)

      if (index >= 0) {
        if (options_id === 'addOrDelete') {
          presetStore.list[index].options = value
        } else {
          const options = list[index].options
          const indexOtions = options.findIndex(v => v.key === options_id)

          if (indexOtions >= 0) {
            options[indexOtions] = value[indexOtions]
          }
        }
      }
    }
    if (type === 'selects') {
      const list = presetStore.list
      const index = list.findIndex(v => v.key === list_id)

      if (index >= 0) {
        const options = list[index].options
        const indexOtions = options.findIndex(v => v.key === options_id)

        if (indexOtions >= 0) {
          if (selects_id === 'addOrDelete') {
            presetStore.list[index].options[indexOtions].selects = value
          } else {
            const selects = options[indexOtions].selects
            const indexSelects = selects.findIndex(v => v.key === selects_id)

            if (indexSelects >= 0) {
              selects[indexSelects] = value[indexSelects]
              // presetStore.list[index].options[indexOtions].selects[
              //   indexSelects
              // ] = value
            }
          }
        }
      }
    }
  }
  render() {
    const bcData = ['首页', '计算器管理', '列表']
    const { coreTableStore, presetStore } = this.props
    const { fields } = coreTableStore

    const tableHeader = _.map(fields, (v, k) => {
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
    return (
      <div className="switches-network">
        <FuncList
          store={this.props.coreTableStore}
          bcData={bcData}
          downloadCSV={Api.downloadTableCSV}
          funcEnName={'table'}
          tableHeader={tableHeader}
          expandedRowRender={record => {
            const { presetValue } = record
            if (presetValue) presetStore.setPresetValue(JSON.parse(presetValue))
            return (
              <Row>
                <Col span={24}>
                  <Button
                    className="editable-add-btn"
                    onClick={this.handleSubmit.bind(this, record)}
                    type="primary"
                  >
                    保存
                  </Button>(修改下面内容后，记得点保存)
                </Col>
                <Col span={24}>
                  <Col span={6}>
                    按钮名称:
                    <Input
                      defaultValue={presetStore.butvalue}
                      onChange={e => {
                        presetStore.butvalue = e.target.value
                      }}
                    />
                  </Col>
                  <Col span={6} offset={2}>
                    标题:
                    <Input
                      defaultValue={presetStore.title}
                      onChange={e => {
                        presetStore.title = e.target.value
                      }}
                    />
                  </Col>
                  <Col span={6} offset={2}>
                    描述:
                    <Input.TextArea
                      defaultValue={presetStore.description}
                      onChange={e => {
                        presetStore.description = e.target.value
                      }}
                    />
                  </Col>
                </Col>
                <Col span={24}>
                  <PresetValue
                    data={presetStore.list.toJS()}
                    onChange={(value, key, id) => {
                      this.onChange(value, {
                        key,
                        list_id: id || 'addOrDelete',
                        type: 'list'
                      })
                    }}
                    title={''}
                    fields={{
                      key: 'ID',
                      title: '大类型'
                    }}
                    defaultValue={presetStore.item}
                    expandedRowRender={record2 => {
                      console.log(record2)
                      return (
                        <PresetValue
                          data={
                            (record2.options && record2.options.toJS()) || []
                          }
                          title={'小类型'}
                          fields={{
                            key: 'ID',
                            title: '小类型'
                          }}
                          defaultValue={presetStore.option}
                          onChange={(value, key, id) => {
                            this.onChange(value, {
                              key,
                              list_id: record2.key,
                              options_id: id || 'addOrDelete',
                              type: 'options'
                            })
                          }}
                          expandedRowRender={record3 => {
                            console.log(record3)
                            return (
                              <PresetValue
                                data={
                                  (record3.selects && record3.selects.toJS()) ||
                                  []
                                }
                                title={'基本选项'}
                                fields={{
                                  key: 'ID',
                                  lable: '文本',
                                  value: '数值',
                                  type: '类型'
                                }}
                                defaultValue={presetStore.select}
                                onChange={(value, key, id) => {
                                  this.onChange(value, {
                                    key,
                                    list_id: record2.key,
                                    options_id: record3.key,
                                    selects_id: id || 'addOrDelete',
                                    type: 'selects'
                                  })
                                }}
                              />
                            )
                          }}
                        />
                      )
                    }}
                  />
                </Col>
              </Row>
            )
          }}
        />
        <AddTableModal {...this.props} />
      </div>
    )
  }
}
