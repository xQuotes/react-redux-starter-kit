import {
  inject, observer
} from 'mobx-react'

import AddForm from '../../components/cmdb/infoAdd'

@inject(
  'logStore'
  )
@observer
export default class AddLog extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {logStore} = this.props
    const paramsData = logStore.params
    const log = logStore.list.getById(paramsData.id) || {}
    let formDataTitileServer = _.map(logStore.updateFields, (v, k) => {
      return _.assign({}, {
        name: k,
        label: v,
        fieldOptions: {
          initialValue: log[k],
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
          initialValue: paramsData.actionType == 'clone' ? undefined : log.id
        }
      },
      ...formDataTitileServer
    ]

    return (
      <AddForm
        store={logStore}
        title={formDataTitileServer}/>)
  }
}