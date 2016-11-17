import {
  inject, observer
} from 'mobx-react'

import AddForm from '../../components/cmdb/infoAdd'

@inject(
  'connectionStore'
  )
@observer
export default class AddConnection extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {connectionStore} = this.props
    const paramsData = connectionStore.params
    const connection = connectionStore.list.getById(paramsData.id) || {}
    let formDataTitileServer = _.map(connectionStore.updateFields, (v, k) => {
      return _.assign({}, {
        name: k,
        label: v,
        fieldOptions: {
          initialValue: connection[k],
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
          initialValue: paramsData.actionType == 'clone' ? undefined : connection.id
        }
      },
      ...formDataTitileServer
    ]

    return (
      <AddForm
        store={connectionStore}
        title={formDataTitileServer}/>)
  }
}