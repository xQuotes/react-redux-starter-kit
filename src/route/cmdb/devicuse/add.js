import {
  inject, observer
} from 'mobx-react'

import AddForm from '../../components/cmdb/infoAdd'

@inject(
  'devicuseStore'
  )
@observer
export default class AddDevicuse extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {devicuseStore} = this.props
    const paramsData = devicuseStore.params
    const devicuse = devicuseStore.list.getById(paramsData.id) || {}
    let formDataTitileServer = _.map(devicuseStore.updateFields, (v, k) => {
      return _.assign({}, {
        name: k,
        label: v,
        fieldOptions: {
          initialValue: devicuse[k],
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
          initialValue: paramsData.actionType == 'clone' ? undefined : devicuse.id
        }
      },
      ...formDataTitileServer
    ]

    return (
      <AddForm
        store={devicuseStore}
        title={formDataTitileServer}/>)
  }
}