import {
  inject, observer
} from 'mobx-react'

import AddForm from '../../components/cmdb/infoAdd'

@inject(
  'applymessageStore'
  )
@observer
export default class AddApplymessage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {applymessageStore} = this.props
    const paramsData = applymessageStore.params
    const applymessage = applymessageStore.list.getById(paramsData.id) || {}
    let formDataTitileServer = _.map(applymessageStore.updateFields, (v, k) => {
      return _.assign({}, {
        name: k,
        label: v,
        fieldOptions: {
          initialValue: applymessage[k],
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
          initialValue: paramsData.actionType == 'clone' ? undefined : applymessage.id
        }
      },
      ...formDataTitileServer
    ]

    return (
      <AddForm
        store={applymessageStore}
        title={formDataTitileServer}/>)
  }
}