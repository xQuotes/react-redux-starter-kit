import {
  inject, observer
} from 'mobx-react'

import AddForm from '../../components/cmdb/infoAdd'

@inject(
  'mysettingStore'
  )
@observer
export default class AddMysetting extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {mysettingStore} = this.props
    const paramsData = mysettingStore.params
    const mysetting = mysettingStore.list.getById(paramsData.id) || {}
    let formDataTitileServer = _.map(mysettingStore.updateFields, (v, k) => {
      return _.assign({}, {
        name: k,
        label: v,
        fieldOptions: {
          initialValue: mysetting[k],
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
          initialValue: paramsData.actionType == 'clone' ? undefined : mysetting.id
        }
      },
      ...formDataTitileServer
    ]

    return (
      <AddForm
        store={mysettingStore}
        title={formDataTitileServer}/>)
  }
}