import {
  inject, observer
} from 'mobx-react'

import AddForm from '../../components/switches/commonInfoAdd'

@inject(
  'wirelessStore'
  )
@observer
export default class AddWireless extends React.Component {
  constructor(props) {
    super(props)
  }
  wirelessIpExists(rule, value, callback) {
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
  wirelessPortExists(rule, value, callback) {
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
    const {wirelessStore} = this.props
    const paramsData = wirelessStore.params
    const wireless = wirelessStore.list.getById(paramsData.id) || {}
    let formDataTitileServer = _.map(wirelessStore.updateFields, (v, k) => {
      return _.assign({}, {
        name: k,
        label: v,
        fieldOptions: {
          initialValue: wireless[k],
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
          initialValue: paramsData.actionType == 'clone' ? undefined : wireless.id
        }
      },
      ...formDataTitileServer
    ]

    return (
      <AddForm
        store={wirelessStore}
        title={formDataTitileServer}/>)
  }
}