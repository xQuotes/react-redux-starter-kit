import {
  inject, observer
} from 'mobx-react'

import AddForm from '../../components/cmdb/infoAdd'

@inject(
  'productionStore'
  )
@observer
export default class AddProduction extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {productionStore} = this.props
    const paramsData = productionStore.params
    const production = productionStore.list.getById(paramsData.id) || {}
    let formDataTitileServer = _.map(productionStore.updateFields, (v, k) => {
      return _.assign({}, {
        name: k,
        label: v,
        fieldOptions: {
          initialValue: production[k],
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
          initialValue: paramsData.actionType == 'clone' ? undefined : production.id
        }
      },
      ...formDataTitileServer
    ]

    return (
      <AddForm
        store={productionStore}
        title={formDataTitileServer}/>)
  }
}