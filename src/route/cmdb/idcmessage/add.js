import {
  inject, observer
} from 'mobx-react'

import AddForm from '../../components/cmdb/infoAdd'

@inject(
  'idcmessageStore'
  )
@observer
export default class AddIdcmessage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {idcmessageStore} = this.props
    const paramsData = idcmessageStore.params
    const idcmessage = idcmessageStore.list.getById(paramsData.id) || {}
    let formDataTitileServer = _.map(idcmessageStore.updateFields, (v, k) => {
      return _.assign({}, {
        name: k,
        label: v,
        fieldOptions: {
          initialValue: idcmessage[k],
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
          initialValue: paramsData.actionType == 'clone' ? undefined : idcmessage.id
        }
      },
      ...formDataTitileServer
    ]

    return (
      <AddForm
        store={idcmessageStore}
        title={formDataTitileServer}/>)
  }
}