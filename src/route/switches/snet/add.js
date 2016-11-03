import {
  inject, observer
} from 'mobx-react'

import AddForm from '../../components/switches/commonInfoAdd'

@inject(
  'snetStore'
  )
@observer
export default class AddSnet extends React.Component {
  constructor(props) {
    super(props)
  }
  snetIpExists(rule, value, callback) {
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
  snetPortExists(rule, value, callback) {
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
    const {snetStore} = this.props
    const paramsData = snetStore.params
    const snet = snetStore.list.getById(paramsData.id) || {}
    let formDataTitileServer = _.map(snetStore.updateFields, (v, k) => {
      return _.assign({}, {
        name: k,
        label: v,
        fieldOptions: {
          initialValue: snet[k],
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
          initialValue: paramsData.actionType == 'clone' ? undefined : snet.id
        }
      },
      ...formDataTitileServer
    ]

    return (
      <AddForm
        store={snetStore}
        title={formDataTitileServer}/>)
  }
}