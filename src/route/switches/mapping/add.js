import {
  inject, observer
} from 'mobx-react'

import AddForm from '../../components/switches/commonInfoAdd'

@inject(
  'mappingStore'
  )
@observer
export default class AddMapping extends React.Component {
  constructor(props) {
    super(props)
  }
  mappingIpExists(rule, value, callback) {
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
  mappingPortExists(rule, value, callback) {
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
    const {mappingStore} = this.props
    const paramsData = mappingStore.params
    const mapping = mappingStore.list.getById(paramsData.id) || {}
    let formDataTitileServer = _.map(mappingStore.updateFields, (v, k) => {
      return _.assign({}, {
        name: k,
        label: v,
        fieldOptions: {
          initialValue: mapping[k],
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
          initialValue: paramsData.actionType == 'clone' ? undefined : mapping.id
        }
      },
      ...formDataTitileServer
    ]

    return (
      <AddForm
        store={mappingStore}
        title={formDataTitileServer}/>)
  }
}