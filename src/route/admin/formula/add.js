import { inject, observer } from 'mobx-react'

import AddForm from '../../components/switches/commonInfoAdd'

@inject('formulaStore')
@observer
export default class AddFormula extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { formulaStore } = this.props
    const paramsData = formulaStore.params
    const formula = formulaStore.list.getById(paramsData.id) || {}
    let formDataTitileServer = _.map(formulaStore.updateFields, (v, k) => {
      return _.assign(
        {},
        {
          name: k,
          label: v,
          fieldOptions: {
            initialValue: formula[k],
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
          initialValue:
            paramsData.actionType == 'clone' ? undefined : formula.id
        }
      },
      ...formDataTitileServer
    ]

    return <AddForm store={formulaStore} title={formDataTitileServer} />
  }
}
