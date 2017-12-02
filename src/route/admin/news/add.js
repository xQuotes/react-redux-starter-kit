import { inject, observer } from 'mobx-react'

import AddForm from '../../components/switches/commonInfoAdd'
import ReactQuill from '../../components/edit/index'

@inject('newsStore')
@observer
export default class AddNews extends React.Component {
  constructor(props) {
    super(props)
  }
  newsIpExists(rule, value, callback) {
    if (!value) {
      callback()
    } else {
      if (!ipReg.test(value)) {
        callback([new Error('IP 格式不正确')])
      } else {
        callback()
      }
    }
  }
  newsPortExists(rule, value, callback) {
    if (!value) {
      callback()
    } else {
      if (!portReg.test(value)) {
        callback([new Error('端口格式不正确')])
      } else {
        callback()
      }
    }
  }

  render() {
    const { newsStore } = this.props
    const paramsData = newsStore.params
    const news = newsStore.list.getById(paramsData.id) || {}
    let formDataTitileServer = _.map(newsStore.updateFields, (v, k) => {
      if (k === 'content') {
        return _.assign(
          {},
          {
            name: k,
            label: v,
            formType: 'component',
            component: props => {
              return <ReactQuill value={news[k]} />
            },
            fieldOptions: {
              initialValue: news[k],
              rules: [
                // { required: true, whitespace: true, message: '请输入主机名' }
              ]
            },
            placeholder: `请输入${v}`
          }
        )
      }
      return _.assign(
        {},
        {
          name: k,
          label: v,
          fieldOptions: {
            initialValue: news[k],
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
          initialValue: paramsData.actionType == 'clone' ? undefined : news.id
        }
      },
      ...formDataTitileServer
    ]

    return <AddForm store={newsStore} title={formDataTitileServer} />
  }
}
