import { inject, observer } from 'mobx-react'

import AddForm from '../../components/switches/commonInfoAdd'
// import Editor from '../../components/editor/'

import JSONView from '../../components/jsonview/edit'

@inject('caculatorStore')
@observer
export default class AddCaculator extends React.Component {
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
    const { caculatorStore, code } = this.props
    const options = {
      selectOnLineNumbers: true
    }
    const paramsData = caculatorStore.params
    const caculator = caculatorStore.list.getById(paramsData.id) || {}
    let formDataTitileServer = _.map(caculatorStore.updateFields, (v, k) => {
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
                val = JSON.parse(caculator[k]) || {}
              } catch (err) {
                val = {}
              }

              console.log(caculator[k])

              return <JSONView value={val} field={'presetValue'} {...props} />
              {
                /*
                  <Editor
                    width="300px"
                    height="300px"
                    defaultValue={JSON.stringify(JSON.parse(caculator[k]), null, 2)} 
                    mode="json" />
                */
              }
            },
            fieldOptions: {
              initialValue: caculator[k],
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
            initialValue: caculator[k],
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
            paramsData.actionType == 'clone' ? undefined : caculator.id
        }
      },
      ...formDataTitileServer
    ]

    return (
      <div>
        <AddForm store={caculatorStore} title={formDataTitileServer} />
      </div>
    )
  }
}
