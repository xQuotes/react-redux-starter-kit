import { inject, observer } from 'mobx-react'

import AddForm from '../../components/switches/commonInfoAdd'

@inject('rateStore')
@observer
export default class Addrate extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { rateStore } = this.props
    const paramsData = rateStore.params
    const rate = rateStore.list.getById(paramsData.id) || {}
    let formDataTitileServer = _.map(rateStore.updateFields, (v, k) => {
      return _.assign(
        {},
        {
          name: k,
          label: v,
          fieldOptions: {
            initialValue: rate[k],
            rules: [
              // { required: true, whitespace: true, message: '请输入主机名' }
            ]
          },
          placeholder: `请输入${v}`
        }
      )
    })
    formDataTitileServer = [
      {
        type: 'hidden',
        name: 'id',
        label: 'id',
        fieldOptions: {
          initialValue: paramsData.actionType == 'clone' ? undefined : rate.id
        }
      },
      ...formDataTitileServer
    ]

    return <AddForm store={rateStore} title={formDataTitileServer} />
  }
}
