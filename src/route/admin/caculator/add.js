import { inject, observer } from 'mobx-react'

import AddForm from '../../components/switches/commonInfoAdd'

@inject('caculatorStore')
@observer
export default class AddCaculator extends React.Component {
  constructor(props) {
    super(props)
  }
  caculatorIpExists(rule, value, callback) {
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
  caculatorPortExists(rule, value, callback) {
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
    const { caculatorStore } = this.props
    const paramsData = caculatorStore.params
    const caculator = caculatorStore.list.getById(paramsData.id) || {}
    let formDataTitileServer = _.map(caculatorStore.updateFields, (v, k) => {
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

    return <AddForm store={caculatorStore} title={formDataTitileServer} />
  }
}
