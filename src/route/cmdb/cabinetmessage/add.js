import {
  inject, observer
} from 'mobx-react'

import AddForm from '../../components/cmdb/infoAdd'

@inject(
  'cabinetmessageStore'
  )
@observer
export default class AddCabinetmessage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {cabinetmessageStore} = this.props
    const paramsData = cabinetmessageStore.params
    const cabinetmessage = cabinetmessageStore.list.getById(paramsData.id) || {}
    let formDataTitileServer = _.map(cabinetmessageStore.updateFields, (v, k) => {
      return _.assign({}, {
        name: k,
        label: v,
        fieldOptions: {
          initialValue: cabinetmessage[k],
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
          initialValue: paramsData.actionType == 'clone' ? undefined : cabinetmessage.id
        }
      },
      ...formDataTitileServer
    ]

    return (
      <AddForm
        store={cabinetmessageStore}
        title={formDataTitileServer}/>)
  }
}