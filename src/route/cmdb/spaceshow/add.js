import {
  inject, observer
} from 'mobx-react'

import AddForm from '../../components/cmdb/infoAdd'

@inject(
  'spaceshowStore'
  )
@observer
export default class AddSpaceshow extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {spaceshowStore} = this.props
    const paramsData = spaceshowStore.params
    const spaceshow = spaceshowStore.list.getById(paramsData.id) || {}
    let formDataTitileServer = _.map(spaceshowStore.updateFields, (v, k) => {
      return _.assign({}, {
        name: k,
        label: v,
        fieldOptions: {
          initialValue: spaceshow[k],
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
          initialValue: paramsData.actionType == 'clone' ? undefined : spaceshow.id
        }
      },
      ...formDataTitileServer
    ]

    return (
      <AddForm
        store={spaceshowStore}
        title={formDataTitileServer}/>)
  }
}