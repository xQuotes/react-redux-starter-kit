import { inject, observer } from 'mobx-react'

import AddForm from '../../components/switches/commonInfoAdd'

@inject('guideStore')
@observer
export default class AddGuide extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { guideStore, location: { query: { areaCode } } } = this.props

    const paramsData = guideStore.params
    const guide = guideStore.list.getById(paramsData.id) || {}
    let formDataTitileServer = _.map(guideStore.updateFields, (v, k) => {
      if (k === 'areaCode') {
        return _.assign(
          {},
          {
            name: k,
            label: v,
            disabled: !!areaCode,
            fieldOptions: {
              initialValue: guide[k] || areaCode,
              rules: [
                // { required: true, whitespace: true, message: '请输入主机名' }
              ]
            },
            placeholder: `请选择${v}`
          }
        )
      }

      if (k === 'type') {
        return _.assign(
          {},
          {
            name: k,
            label: v,
            formType: 'select',
            optionData: [
              {
                id: '1',
                value: '清单规则'
              },
              {
                id: '2',
                value: '定额规则'
              }
            ],
            fieldOptions: {
              initialValue: '1',
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
