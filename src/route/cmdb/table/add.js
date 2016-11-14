import {
  inject, observer
} from 'mobx-react'

import AddForm from '../../components/cmdb/infoAdd'

@inject(
  'tableStore'
  )
@observer
export default class AddTable extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {tableStore} = this.props
    const paramsData = tableStore.params
    const table = tableStore.list.getById(paramsData.id) || {}
    let formDataTitileServer = _.map(tableStore.updateFields, (v, k) => {
      return _.assign({}, {
        name: k,
        label: v,
        fieldOptions: {
          initialValue: table[k],
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
          initialValue: paramsData.actionType == 'clone' ? undefined : table.id
        }
      },
      ...formDataTitileServer
    ]

    return (
      <AddForm
        store={tableStore}
        title={formDataTitileServer}/>)
  }
}