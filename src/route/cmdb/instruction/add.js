import {
  inject, observer
} from 'mobx-react'

import AddForm from '../../components/cmdb/infoAdd'

@inject(
  'instructionStore'
  )
@observer
export default class AddInstruction extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {instructionStore} = this.props
    const paramsData = instructionStore.params
    const instruction = instructionStore.list.getById(paramsData.id) || {}
    let formDataTitileServer = _.map(instructionStore.updateFields, (v, k) => {
      return _.assign({}, {
        name: k,
        label: v,
        fieldOptions: {
          initialValue: instruction[k],
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
          initialValue: paramsData.actionType == 'clone' ? undefined : instruction.id
        }
      },
      ...formDataTitileServer
    ]

    return (
      <AddForm
        store={instructionStore}
        title={formDataTitileServer}/>)
  }
}