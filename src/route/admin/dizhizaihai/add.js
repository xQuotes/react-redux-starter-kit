import { inject, observer } from 'mobx-react'

import AddForm from '../../components/switches/commonInfoAdd'
// import Editor from '../../components/editor/'

import JSONView from '../../components/jsonview/edit'

@inject('dizhizaihaiStore')
@observer
export default class AddDizhizaihai extends React.Component {
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
    const { dizhizaihaiStore, areaCode } = this.props
    const options = {
      selectOnLineNumbers: true
    }
    const paramsData = dizhizaihaiStore.params
    const dizhizaihai = dizhizaihaiStore.list.getById(paramsData.id) || {}
    let formDataTitileServer = _.map(dizhizaihaiStore.updateFields, (v, k) => {
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
                val = JSON.parse(dizhizaihai[k]) || {}
              } catch (err) {
                val = {}
              }
              return <JSONView value={val} field={'presetValue'} {...props} />
              {
                /*
                  <Editor
                    width="300px"
                    height="300px"
                    defaultValue={JSON.stringify(JSON.parse(dizhizaihai[k]), null, 2)} 
                    mode="json" />
                */
              }
            },
            fieldOptions: {
              initialValue: dizhizaihai[k],
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
            initialValue: dizhizaihai[k],
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
            paramsData.actionType == 'clone' ? undefined : dizhizaihai.id
        }
      },
      ...formDataTitileServer
    ]

    return (
      <div>
        <AddForm store={dizhizaihaiStore} title={formDataTitileServer} />
      </div>
    )
  }
}
