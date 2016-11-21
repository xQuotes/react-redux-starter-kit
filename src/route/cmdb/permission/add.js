import {
  inject, observer
} from 'mobx-react'

import AddForm from '../../components/cmdb/infoAdd'

@inject(
  'permissionStore'
  )
@observer
export default class AddPermission extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {permissionStore} = this.props
    const paramsData = permissionStore.params
    const permission = permissionStore.list.getById(paramsData.id) || {}
    let formDataTitileServer = _.map(permissionStore.updateFields, (v, k) => {
      return _.assign({}, {
        name: k,
        label: v,
        fieldOptions: {
          initialValue: permission[k],
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
          initialValue: paramsData.actionType == 'clone' ? undefined : permission.id
        }
      },
      ...formDataTitileServer
    ]

    return (
      <AddForm
        store={permissionStore}
        title={formDataTitileServer}/>)
  }
}