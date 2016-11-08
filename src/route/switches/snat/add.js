import {
  inject, observer
} from 'mobx-react'

import AddForm from '../../components/switches/commonInfoAdd'

@inject(
  'snatStore'
  )
@observer
export default class AddSnat extends React.Component {
  constructor(props) {
    super(props)
  }
  snatIpExists(rule, value, callback) {
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
  snatPortExists(rule, value, callback) {
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
    const {snatStore} = this.props
    const paramsData = snatStore.params
    const snat = snatStore.list.getById(paramsData.id) || {}
    let formDataTitileServer = _.map(snatStore.updateFields, (v, k) => {
      return _.assign({}, {
        name: k,
        label: v,
        fieldOptions: {
          initialValue: snat[k],
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
          initialValue: paramsData.actionType == 'clone' ? undefined : snat.id
        }
      },
      ...formDataTitileServer
    ]

    return (
      <AddForm
        store={snatStore}
        title={formDataTitileServer}/>)
  }
}