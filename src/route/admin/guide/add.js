import { inject, observer } from 'mobx-react'

import AddForm from '../../components/switches/commonInfoAdd'

@inject('guideStore')
@observer
export default class AddGuide extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { guideStore, location: { query: { code } } } = this.props

    const paramsData = guideStore.params
    const guide = guideStore.list.getById(paramsData.id) || {}
    let formDataTitileServer = _.map(guideStore.updateFields, (v, k) => {
      if (k === 'code') {
        return _.assign(
          {},
          {
            name: k,
            label: v,
            disabled: !!code,
            fieldOptions: {
              initialValue: guide[k] || code,
              rules: [
                // { required: true, whitespace: true, message: '请输入主机名' }
              ]
            },
            placeholder: `请选择${v}`
          }
        )
      }

      return _.assign(
        {},
        {
          name: k,
          label: v,
          fieldOptions: {
            initialValue: guide[k],
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
          initialValue: paramsData.actionType == 'clone' ? undefined : guide.id
        }
      },
      ...formDataTitileServer
    ]

    return <AddForm store={guideStore} title={formDataTitileServer} />
  }
}
