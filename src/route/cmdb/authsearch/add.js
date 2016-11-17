import {
  inject, observer
} from 'mobx-react'

import AddForm from '../../components/cmdb/infoAdd'

@inject(
  'authsearchStore'
  )
@observer
export default class AddAuthsearch extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {authsearchStore} = this.props
    const paramsData = authsearchStore.params
    const authsearch = authsearchStore.list.getById(paramsData.id) || {}
    let formDataTitileServer = _.map(authsearchStore.updateFields, (v, k) => {
      return _.assign({}, {
        name: k,
        label: v,
        fieldOptions: {
          initialValue: authsearch[k],
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
          initialValue: paramsData.actionType == 'clone' ? undefined : authsearch.id
        }
      },
      ...formDataTitileServer
    ]

    return (
      <AddForm
        store={authsearchStore}
        title={formDataTitileServer}/>)
  }
}