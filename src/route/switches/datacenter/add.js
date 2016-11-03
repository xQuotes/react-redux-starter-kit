import {
  inject, observer
} from 'mobx-react'

import AddForm from '../../components/switches/commonInfoAdd'

@inject(
  'datacenterStore'
  )
@observer
export default class AddDatacenter extends React.Component {
  constructor(props) {
    super(props)
  }
  datacenterIpExists(rule, value, callback) {
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
  datacenterPortExists(rule, value, callback) {
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
    const {datacenterStore} = this.props
    const paramsData = datacenterStore.params
    const datacenter = datacenterStore.list.getById(paramsData.id) || {}
    let formDataTitileServer = _.map(datacenterStore.updateFields, (v, k) => {
      return _.assign({}, {
        name: k,
        label: v,
        fieldOptions: {
          initialValue: datacenter[k],
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
          initialValue: paramsData.actionType == 'clone' ? undefined : datacenter.id
        }
      },
      ...formDataTitileServer
    ]

    return (
      <AddForm
        store={datacenterStore}
        title={formDataTitileServer}/>)
  }
}