import { inject, observer } from 'mobx-react'

import AddForm from '../../components/switches/commonInfoAdd'
// import Editor from '../../components/editor/'

import JSONView from '../../components/jsonview/edit'
import { defaultOptionsValue } from './model'

@inject('tableStore')
@observer
export default class AddTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      code: '// type your code...'
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
    const { tableStore, code } = this.props
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
                  <JSONView value={val} field={'presetValue'} {...props} />
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
        type: 'hidden',
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
        <AddForm store={tableStore} title={formDataTitileServer} />
      </div>
    )
  }
}
