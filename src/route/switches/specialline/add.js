import {
  inject, observer
} from 'mobx-react'

import AddForm from '../../components/switches/commonInfoAdd'

@inject(
  'speciallineStore'
  )
@observer
export default class AddSpecialline extends React.Component {
  constructor(props) {
    super(props)
  }
  speciallineIpExists(rule, value, callback) {
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
  speciallinePortExists(rule, value, callback) {
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
    const {speciallineStore} = this.props
    const paramsData = speciallineStore.params
    const specialline = speciallineStore.list.getById(paramsData.id) || {}
    let formDataTitileServer = _.map(speciallineStore.updateFields, (v, k) => {
      return _.assign({}, {
        name: k,
        label: v,
        fieldOptions: {
          initialValue: specialline[k],
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
          initialValue: paramsData.actionType == 'clone' ? undefined : specialline.id
        }
      },
      ...formDataTitileServer
    ]

    return (
      <AddForm
        store={speciallineStore}
        title={formDataTitileServer}/>)
  }
}