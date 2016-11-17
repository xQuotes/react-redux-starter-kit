import {
  inject, observer
} from 'mobx-react'

import AddForm from '../../components/cmdb/infoAdd'

@inject(
  'networkmanageStore'
  )
@observer
export default class AddNetworkmanage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {networkmanageStore} = this.props
    const paramsData = networkmanageStore.params
    const networkmanage = networkmanageStore.list.getById(paramsData.id) || {}
    let formDataTitileServer = _.map(networkmanageStore.updateFields, (v, k) => {
      return _.assign({}, {
        name: k,
        label: v,
        fieldOptions: {
          initialValue: networkmanage[k],
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
          initialValue: paramsData.actionType == 'clone' ? undefined : networkmanage.id
        }
      },
      ...formDataTitileServer
    ]

    return (
      <AddForm
        store={networkmanageStore}
        title={formDataTitileServer}/>)
  }
}