import { inject, observer } from 'mobx-react'

import AddForm from '../../components/switches/commonInfoAdd'
// import Editor from '../../components/editor/'

import JSONView from '../../components/jsonview/editForm'
import { defaultOptionsValue } from './model'

@inject('tableStore')
@observer
export default class AddTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      areaCode: '// type your code...'
    }
  }
  editorDidMount(editor, monaco) {
    console.log('editorDidMount', editor)
    editor.focus()
  }
  onChange(newValue, e) {
    console.log('onChange', newValue, e)
  }

  render() {
    const {
      tableStore,
      location: { query: { type, areaCode, formulaId } }
    } = this.props

    const options = {
      selectOnLineNumbers: true
    }
    const paramsData = tableStore.params
    const table = tableStore.list.getById(paramsData.id) || {}
    let formDataTitileServer = _.map(tableStore.updateFields, (v, k) => {
      if (k === 'presetValue') {
        return _.assign(
          {},
          {
            name: k,
            label: v,
            formType: 'component',
            component: props => {
              let val = {}

              try {
                val = JSON.parse(table[k]) || defaultOptionsValue
              } catch (err) {
                val = defaultOptionsValue
              }
              return (
                <div>
                  <JSONView
                    defaultValue={defaultOptionsValue}
                    value={val}
                    field={'presetValue'}
                    {...props}
                  />
                  <img
                    src={require('./demo.jpg')}
                    alt=""
                    style={{
                      width: '80%'
                    }}
                  />
                </div>
              )
            },
            fieldOptions: {
              initialValue: table[k],
              rules: [
                // { required: true, whitespace: true, message: '请输入主机名' }
              ]
            },
            placeholder: `请输入${v}`
          }
        )
      }

      if (k === 'contentType') {
        return _.assign(
          {},
          {
            name: k,
            label: v,
            formType: 'select',
            optionData: [
              {
                id: 'select',
                value: '弹窗选项'
              },
              {
                id: 'drop_down_select',
                value: '下拉选项'
              },
              {
                id: 'text',
                value: '文本'
              },
              {
                id: 'disabled',
                value: '不能输入'
              }
            ],
            fieldOptions: {
              initialValue: table[k] || 'text',
              rules: [
                // { required: true, whitespace: true, message: '请输入主机名' }
              ]
            },
            placeholder: `请选择${v}`
          }
        )
      }

      if (k === 'type') {
        return _.assign(
          {},
          {
            name: k,
            label: v,
            disabled: !!type,
            fieldOptions: {
              initialValue: table[k] || type,
              rules: [
                // { required: true, whitespace: true, message: '请输入主机名' }
              ]
            },
            placeholder: `请选择${v}`
          }
        )
      }

      if (k === 'formulaId') {
        return _.assign(
          {},
          {
            name: k,
            label: v,
            disabled: true,
            fieldOptions: {
              initialValue: table[k] || formulaId,
              rules: [
                // { required: true, whitespace: true, message: '请输入主机名' }
              ]
            },
            placeholder: `请选择${v}`
          }
        )
      }

      if (k === 'areaCode') {
        return _.assign(
          {},
          {
            name: k,
            label: v,
            disabled: !!areaCode,
            fieldOptions: {
              initialValue: table[k] || areaCode,
              rules: [
                // { required: true, whitespace: true, message: '请输入主机名' }
              ]
            },
            placeholder: `请选择${v}`
          }
        )
      }

      return _.assign(
        {},
        {
          name: k,
          label: v,
          fieldOptions: {
            initialValue: table[k],
            rules: [
              // { required: true, whitespace: true, message: '请输入主机名' }
            ]
          },
          placeholder: `请输入${v}`
        }
      )
    })
    formDataTitileServer = [
      {
        name: 'id',
        label: 'id',
        fieldOptions: {
          initialValue: paramsData.actionType == 'clone' ? undefined : table.id
        }
      },
      ...formDataTitileServer
    ]

    return (
      <div>
        <AddForm store={tableStore} title={formDataTitileServer} item={table} />
      </div>
    )
  }
}
