import {
  inject, observer
} from 'mobx-react'

import AddForm from '../../components/switches/commonInfoAdd'

@inject(
  'dnetStore'
  )
@observer
export default class AddDnet extends React.Component {
  constructor(props) {
    super(props)
  }
  dnetIpExists(rule, value, callback) {
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
  dnetPortExists(rule, value, callback) {
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
    const {dnetStore} = this.props
    const paramsData = dnetStore.params
    const dnet = dnetStore.list.getById(paramsData.id) || {}
    let formDataTitileServer = _.map(dnetStore.updateFields, (v, k) => {
      return _.assign({}, {
        name: k,
        label: v,
        fieldOptions: {
          initialValue: dnet[k],
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
          initialValue: paramsData.actionType == 'clone' ? undefined : dnet.id
        }
      },
      ...formDataTitileServer
    ]

    return (
      <AddForm
        store={dnetStore}
        title={formDataTitileServer}/>)
  }
}