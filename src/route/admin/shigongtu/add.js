import { inject, observer } from 'mobx-react'

import AddForm from '../../components/switches/commonInfoAdd'
// import Editor from '../../components/editor/'

import JSONView from '../../components/jsonview/edit'

@inject('shigongtuStore')
@observer
export default class AddShigongtu extends React.Component {
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
    const { shigongtuStore, areaCode } = this.props
    const options = {
      selectOnLineNumbers: true
    }
    const paramsData = shigongtuStore.params
    const shigongtu = shigongtuStore.list.getById(paramsData.id) || {}
    let formDataTitileServer = _.map(shigongtuStore.updateFields, (v, k) => {
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
                val = JSON.parse(shigongtu[k]) || {}
              } catch (err) {
                val = {}
              }
              return <JSONView value={val} field={'presetValue'} {...props} />
              {
                /*
                  <Editor
                    width="300px"
                    height="300px"
                    defaultValue={JSON.stringify(JSON.parse(shigongtu[k]), null, 2)} 
                    mode="json" />
                */
              }
            },
            fieldOptions: {
              initialValue: shigongtu[k],
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
            initialValue: shigongtu[k],
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
          initialValue:
            paramsData.actionType == 'clone' ? undefined : shigongtu.id
        }
      },
      ...formDataTitileServer
    ]

    return (
      <div>
        <AddForm store={shigongtuStore} title={formDataTitileServer} />
      </div>
    )
  }
}
