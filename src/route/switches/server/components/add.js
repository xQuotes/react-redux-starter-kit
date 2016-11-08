import {
  inject, observer
} from 'mobx-react'

import AddForm from '../../../components/switches/commonInfoAdd'

@inject(
  'serverStore',
  'brandStore',
  'accountmanagerStore'
  )
@observer
export default class AddServer extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    const {
      accountmanagerStore,
      brandStore
    } = this.props
    // brandStore.list.length = 0 && brandStore.getServers()
    
    brandStore.list.length == 0 && brandStore.getServers()
    accountmanagerStore.list.length == 0 && accountmanagerStore.getServers()
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
    const {serverStore, brandStore, accountmanagerStore} = this.props

    var formType = {
      'brand': 'select',
      'acc_man': 'select'
    }
    var optionData = {
      'brand': _.map(brandStore.list, (v, k) => {
          return {
            id: v.name,
            value: v.name
          }
        }),
      'acc_man': _.map(accountmanagerStore.list, (v, k) => {
          return {
            id: v.name,
            value: v.name
          }
        }),
    }
    const paramsData = serverStore.params
    const server = serverStore.list.getById(paramsData.id) || {}
    let formDataTitileServer = _.map(serverStore.updateFields, (v, k) => {
      return _.assign({}, {
        formType: formType[k],
        optionData: optionData[k],
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