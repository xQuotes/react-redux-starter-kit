import {
  inject, observer
} from 'mobx-react'

import AddForm from '../../components/switches/commonInfoAdd'

@inject(
  'brandStore'
  )
@observer
export default class AddBrand extends React.Component {
  constructor(props) {
    super(props)
  }
  brandIpExists(rule, value, callback) {
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
  brandPortExists(rule, value, callback) {
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
    const {brandStore} = this.props
    const paramsData = brandStore.params
    const brand = brandStore.list.getById(paramsData.id) || {}
    let formDataTitileServer = _.map(brandStore.updateFields, (v, k) => {
      return _.assign({}, {
        name: k,
        label: v,
        fieldOptions: {
          initialValue: brand[k],
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
          initialValue: paramsData.actionType == 'clone' ? undefined : brand.id
        }
      },
      ...formDataTitileServer
    ]

    return (
      <AddForm
        store={brandStore}
        title={formDataTitileServer}/>)
  }
}