import {
  inject, observer
} from 'mobx-react'

import AddForm from '../../components/switches/commonInfoAdd'

@inject(
  '/*file_append*/Store'
  )
@observer
export default class Add/*File_append*/ extends React.Component {
  constructor(props) {
    super(props)
  }
  /*file_append*/IpExists(rule, value, callback) {
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
  /*file_append*/PortExists(rule, value, callback) {
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
    const {/*file_append*/Store} = this.props
    const paramsData = /*file_append*/Store.params
    const /*file_append*/ = /*file_append*/Store.list.getById(paramsData.id) || {}
    let formDataTitileServer = _.map(/*file_append*/Store.updateFields, (v, k) => {
      return _.assign({}, {
        name: k,
        label: v,
        fieldOptions: {
          initialValue: /*file_append*/[k],
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
          initialValue: paramsData.actionType == 'clone' ? undefined : /*file_append*/.id
        }
      },
      ...formDataTitileServer
    ]

    return (
      <AddForm
        store={/*file_append*/Store}
        title={formDataTitileServer}/>)
  }
}