import {
  inject, observer
} from 'mobx-react'

import AddForm from '../../components/switches/commonInfoAdd'

@inject(
  'networksubStore'
  )
@observer
export default class AddNetworksub extends React.Component {
  constructor(props) {
    super(props)
  }
  networksubIpExists(rule, value, callback) {
    if (!value) {
      callback()
    } else {
      if (!ipReg.test(value)) {
        callback([new Error("IP 格式不正确")]);
      } else {
        callback()
      }
    }
  }
  networksubPortExists(rule, value, callback) {
    if (!value) {
      callback();
    } else {
      if (!portReg.test(value)) {
        callback([new Error("端口格式不正确")]);
      } else {
        callback()
      }
    }
  }

  render() {
    const {networksubStore} = this.props
    const paramsData = networksubStore.params
    const networksub = networksubStore.list.getById(paramsData.id) || {}
    let formDataTitileServer = _.map(networksubStore.updateFields, (v, k) => {
      return _.assign({}, {
        name: k,
        label: v,
        fieldOptions: {
          initialValue: networksub[k],
          rules: [
            // { required: true, whitespace: true, message: '请输入主机名' }
          ],
        },
        placeholder: `请输入${v}`
      })
    })
    formDataTitileServer = [
      {
        type: 'hidden',
        name: 'id',
        label: 'id',
        fieldOptions: {
          initialValue: paramsData.actionType == 'clone' ? undefined : networksub.id
        }
      },
      ...formDataTitileServer
    ]

    return (
      <AddForm
        store={networksubStore}
        title={formDataTitileServer}/>)
  }
}