import { inject, observer } from 'mobx-react'

import AddForm from '../../components/switches/commonInfoAdd'

@inject('userStore')
@observer
export default class AddUser extends React.Component {
  constructor(props) {
    super(props)
  }
  userIpExists(rule, value, callback) {
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
  userPortExists(rule, value, callback) {
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
    const { userStore } = this.props
    const paramsData = userStore.params
    const user = userStore.list.getById(paramsData.id) || {}
    let formDataTitileServer = _.map(userStore.updateFields, (v, k) => {
      return _.assign(
        {},
        {
          name: k,
          label: v,
          fieldOptions: {
            initialValue: user[k],
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
          initialValue: paramsData.actionType == 'clone' ? undefined : user.id
        }
      },
      ...formDataTitileServer
    ]

    return <AddForm store={userStore} title={formDataTitileServer} />
  }
}
