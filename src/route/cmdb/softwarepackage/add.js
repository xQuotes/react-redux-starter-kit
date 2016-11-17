import {
  inject, observer
} from 'mobx-react'

import AddForm from '../../components/cmdb/infoAdd'

@inject(
  'softwarepackageStore'
  )
@observer
export default class AddSoftwarepackage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {softwarepackageStore} = this.props
    const paramsData = softwarepackageStore.params
    const softwarepackage = softwarepackageStore.list.getById(paramsData.id) || {}
    let formDataTitileServer = _.map(softwarepackageStore.updateFields, (v, k) => {
      return _.assign({}, {
        name: k,
        label: v,
        fieldOptions: {
          initialValue: softwarepackage[k],
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
          initialValue: paramsData.actionType == 'clone' ? undefined : softwarepackage.id
        }
      },
      ...formDataTitileServer
    ]

    return (
      <AddForm
        store={softwarepackageStore}
        title={formDataTitileServer}/>)
  }
}