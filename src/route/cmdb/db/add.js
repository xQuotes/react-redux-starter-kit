import {
  inject, observer
} from 'mobx-react'

import AddForm from '../../components/cmdb/infoAdd'

@inject(
  'dbStore'
  )
@observer
export default class AddDb extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {dbStore} = this.props
    const paramsData = dbStore.params
    const db = dbStore.list.getById(paramsData.id) || {}
    let formDataTitileServer = _.map(dbStore.updateFields, (v, k) => {
      return _.assign({}, {
        name: k,
        label: v,
        fieldOptions: {
          initialValue: db[k],
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
          initialValue: paramsData.actionType == 'clone' ? undefined : db.id
        }
      },
      ...formDataTitileServer
    ]

    return (
      <AddForm
        store={dbStore}
        title={formDataTitileServer}/>)
  }
}