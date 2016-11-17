import {
  inject, observer
} from 'mobx-react'

import AddForm from '../../components/cmdb/infoAdd'

@inject(
  'servermessageStore'
  )
@observer
export default class AddServermessage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {servermessageStore} = this.props
    const paramsData = servermessageStore.params
    const servermessage = servermessageStore.list.getById(paramsData.id) || {}
    let formDataTitileServer = _.map(servermessageStore.updateFields, (v, k) => {
      return _.assign({}, {
        name: k,
        label: v,
        fieldOptions: {
          initialValue: servermessage[k],
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
          initialValue: paramsData.actionType == 'clone' ? undefined : servermessage.id
        }
      },
      ...formDataTitileServer
    ]

    return (
      <AddForm
        store={servermessageStore}
        title={formDataTitileServer}/>)
  }
}