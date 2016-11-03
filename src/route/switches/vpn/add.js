import {
  inject, observer
} from 'mobx-react'

import AddForm from '../../components/switches/commonInfoAdd'

@inject(
  'vpnStore'
  )
@observer
export default class AddVpn extends React.Component {
  constructor(props) {
    super(props)
  }
  vpnIpExists(rule, value, callback) {
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
  vpnPortExists(rule, value, callback) {
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
    const {vpnStore} = this.props
    const paramsData = vpnStore.params
    const vpn = vpnStore.list.getById(paramsData.id) || {}
    let formDataTitileServer = _.map(vpnStore.updateFields, (v, k) => {
      return _.assign({}, {
        name: k,
        label: v,
        fieldOptions: {
          initialValue: vpn[k],
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
          initialValue: paramsData.actionType == 'clone' ? undefined : vpn.id
        }
      },
      ...formDataTitileServer
    ]

    return (
      <AddForm
        store={vpnStore}
        title={formDataTitileServer}/>)
  }
}