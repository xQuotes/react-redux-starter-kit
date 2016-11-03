import {
  inject, observer
} from 'mobx-react'

import AddForm from '../../components/switches/commonInfoAdd'

@inject(
  'serverStore'
  )
@observer
export default class AddServer extends React.Component {
  constructor(props) {
    super(props)
  }
  serverIpExists(rule, value, callback) {
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
  serverPortExists(rule, value, callback) {
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
    const {serverStore} = this.props
    const paramsData = serverStore.params
    const server = serverStore.list.getById(paramsData.id) || {}
    let formDataTitileServer = _.map(serverStore.updateFields, (v, k) => {
      return _.assign({}, {
        name: k,
        label: v,
        fieldOptions: {
          initialValue: server[k],
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
          initialValue: paramsData.actionType == 'clone' ? undefined : server.id
        }
      },
      ...formDataTitileServer
    ]

    return (
      <AddForm
        store={serverStore}
        title={formDataTitileServer}/>)
  }
}