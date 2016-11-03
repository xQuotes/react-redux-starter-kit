import {
  inject, observer
} from 'mobx-react'

import AddForm from '../../components/switches/commonInfoAdd'

@inject(
  'accountmanagerStore'
  )
@observer
export default class AddAccountmanager extends React.Component {
  constructor(props) {
    super(props)
  }
  accountmanagerIpExists(rule, value, callback) {
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
  accountmanagerPortExists(rule, value, callback) {
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
    const {accountmanagerStore} = this.props
    const paramsData = accountmanagerStore.params
    const accountmanager = accountmanagerStore.list.getById(paramsData.id) || {}
    let formDataTitileServer = _.map(accountmanagerStore.updateFields, (v, k) => {
      return _.assign({}, {
        name: k,
        label: v,
        fieldOptions: {
          initialValue: accountmanager[k],
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
          initialValue: paramsData.actionType == 'clone' ? undefined : accountmanager.id
        }
      },
      ...formDataTitileServer
    ]

    return (
      <AddForm
        store={accountmanagerStore}
        title={formDataTitileServer}/>)
  }
}