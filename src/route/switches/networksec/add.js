import {
  inject, observer
} from 'mobx-react'

import AddForm from '../../components/switches/commonInfoAdd'

@inject(
  'networksecStore'
  )
@observer
export default class AddNetworksec extends React.Component {
  constructor(props) {
    super(props)
  }
  networksecIpExists(rule, value, callback) {
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
  networksecPortExists(rule, value, callback) {
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
    const {networksecStore} = this.props
    const paramsData = networksecStore.params
    const networksec = networksecStore.list.getById(paramsData.id) || {}
    let formDataTitileServer = _.map(networksecStore.updateFields, (v, k) => {
      return _.assign({}, {
        name: k,
        label: v,
        fieldOptions: {
          initialValue: networksec[k],
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
          initialValue: paramsData.actionType == 'clone' ? undefined : networksec.id
        }
      },
      ...formDataTitileServer
    ]

    return (
      <AddForm
        store={networksecStore}
        title={formDataTitileServer}/>)
  }
}