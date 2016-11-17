import {
  inject, observer
} from 'mobx-react'

import AddForm from '../../components/cmdb/infoAdd'

@inject(
  'quicksearchStore'
  )
@observer
export default class AddQuicksearch extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {quicksearchStore} = this.props
    const paramsData = quicksearchStore.params
    const quicksearch = quicksearchStore.list.getById(paramsData.id) || {}
    let formDataTitileServer = _.map(quicksearchStore.updateFields, (v, k) => {
      return _.assign({}, {
        name: k,
        label: v,
        fieldOptions: {
          initialValue: quicksearch[k],
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
          initialValue: paramsData.actionType == 'clone' ? undefined : quicksearch.id
        }
      },
      ...formDataTitileServer
    ]

    return (
      <AddForm
        store={quicksearchStore}
        title={formDataTitileServer}/>)
  }
}