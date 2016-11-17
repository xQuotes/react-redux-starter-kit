import {
  inject, observer
} from 'mobx-react'

import AddForm from '../../components/cmdb/infoAdd'

@inject(
  'ipmanageStore'
  )
@observer
export default class AddIPmanage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {ipmanageStore} = this.props
    const paramsData = ipmanageStore.params
    const ipmanage = ipmanageStore.list.getById(paramsData.id) || {}
    let formDataTitileServer = _.map(ipmanageStore.updateFields, (v, k) => {
      return _.assign({}, {
        name: k,
        label: v,
        fieldOptions: {
          initialValue: ipmanage[k],
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
          initialValue: paramsData.actionType == 'clone' ? undefined : ipmanage.id
        }
      },
      ...formDataTitileServer
    ]

    return (
      <AddForm
        store={ipmanageStore}
        title={formDataTitileServer}/>)
  }
}