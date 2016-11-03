import {
  inject, observer
} from 'mobx-react'

import AddForm from '../../components/switches/commonInfoAdd'

@inject(
  'networkequipmentStore'
  )
@observer
export default class AddNetworkequipment extends React.Component {
  constructor(props) {
    super(props)
  }
  networkequipmentIpExists(rule, value, callback) {
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
  networkequipmentPortExists(rule, value, callback) {
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
    const {networkequipmentStore} = this.props
    const paramsData = networkequipmentStore.params
    const networkequipment = networkequipmentStore.list.getById(paramsData.id) || {}
    let formDataTitileServer = _.map(networkequipmentStore.updateFields, (v, k) => {
      return _.assign({}, {
        name: k,
        label: v,
        fieldOptions: {
          initialValue: networkequipment[k],
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
          initialValue: paramsData.actionType == 'clone' ? undefined : networkequipment.id
        }
      },
      ...formDataTitileServer
    ]

    return (
      <AddForm
        store={networkequipmentStore}
        title={formDataTitileServer}/>)
  }
}