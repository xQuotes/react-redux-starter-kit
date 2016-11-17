import {
  inject, observer
} from 'mobx-react'

import AddForm from '../../components/cmdb/infoAdd'

@inject(
  'mulsearchStore'
  )
@observer
export default class AddMulsearch extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {mulsearchStore} = this.props
    const paramsData = mulsearchStore.params
    const mulsearch = mulsearchStore.list.getById(paramsData.id) || {}
    let formDataTitileServer = _.map(mulsearchStore.updateFields, (v, k) => {
      return _.assign({}, {
        name: k,
        label: v,
        fieldOptions: {
          initialValue: mulsearch[k],
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
          initialValue: paramsData.actionType == 'clone' ? undefined : mulsearch.id
        }
      },
      ...formDataTitileServer
    ]

    return (
      <AddForm
        store={mulsearchStore}
        title={formDataTitileServer}/>)
  }
}