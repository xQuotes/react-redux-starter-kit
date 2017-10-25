import { inject, observer } from 'mobx-react'

import AddForm from '../../components/switches/commonInfoAdd'
import ReactQuill from '../../components/edit/index'

@inject('QAStore')
@observer
export default class AddQA extends React.Component {
  constructor(props) {
    super(props)
  }
  QAIpExists(rule, value, callback) {
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
  QAPortExists(rule, value, callback) {
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
    const { QAStore } = this.props
    const paramsData = QAStore.params
    const QA = QAStore.list.getById(paramsData.id) || {}
    let formDataTitileServer = _.map(QAStore.updateFields, (v, k) => {
      if (k === 'content') {
        return _.assign(
          {},
          {
            name: k,
            label: v,
            formType: 'component',
            component: props => {
              return <ReactQuill value={QA[k]} />
            },
            fieldOptions: {
              initialValue: QA[k],
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
            initialValue: QA[k],
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
          initialValue: paramsData.actionType == 'clone' ? undefined : QA.id
        }
      },
      ...formDataTitileServer
    ]

    return <AddForm store={QAStore} title={formDataTitileServer} />
  }
}
