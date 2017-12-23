import { inject, observer } from 'mobx-react'

import AddForm from '../../components/switches/commonInfoAdd'
import ReactQuill from '../../components/edit/index'

@inject('toolStore')
@observer
export default class AddNews extends React.Component {
  constructor(props) {
    super(props)
  }
  toolIpExists(rule, value, callback) {
    if (!value) {
      callback()
    } else {
      if (!ipReg.test(value)) {
        callback([new Error('IP 格式不正确')])
      } else {
        callback()
      }
    }
  }
  toolPortExists(rule, value, callback) {
    if (!value) {
      callback()
    } else {
      if (!portReg.test(value)) {
        callback([new Error('端口格式不正确')])
      } else {
        callback()
      }
    }
  }

  render() {
    const { toolStore } = this.props
    const paramsData = toolStore.params
    const tool = toolStore.list.getById(paramsData.id) || {}
    let formDataTitileServer = _.map(toolStore.updateFields, (v, k) => {
      if (k === 'content') {
        return _.assign(
          {},
          {
            name: k,
            label: v,
            formType: 'component',
            component: props => {
              return <ReactQuill value={tool[k]} />
            },
            fieldOptions: {
              initialValue: tool[k],
              rules: [
                // { required: true, whitespace: true, message: '请输入主机名' }
              ]
            },
            placeholder: `请输入${v}`
          }
        )
      }

      if (k === 'type') {
        return _.assign(
          {},
          {
            name: k,
            label: v,
            formType: 'select',
            optionData: [
              {
                id: 'download',
                value: '下载链接'
              },
              {
                id: 'link',
                value: '跳转链接'
              },
              {
                id: 'html',
                value: 'html 描述链接'
              },
              {
                id: 'pdf',
                value: 'pdf 描述链接'
              },
              {
                id: 'content',
                value: 'content 描述'
              }
            ],
            fieldOptions: {
              initialValue: tool[k] || 'pdf',
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
            initialValue: tool[k],
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
          initialValue: paramsData.actionType == 'clone' ? undefined : tool.id
        }
      },
      ...formDataTitileServer
    ]

    return <AddForm store={toolStore} title={formDataTitileServer} />
  }
}
