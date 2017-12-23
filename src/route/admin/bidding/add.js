import { inject, observer } from 'mobx-react'

import AddForm from '../../components/switches/commonInfoAdd'
import ReactQuill from '../../components/edit/index'

@inject('biddingStore')
@observer
export default class AddBidding extends React.Component {
  constructor(props) {
    super(props)
  }
  biddingIpExists(rule, value, callback) {
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
  biddingPortExists(rule, value, callback) {
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
    const { biddingStore } = this.props
    const paramsData = biddingStore.params
    const bidding = biddingStore.list.getById(paramsData.id) || {}
    let formDataTitileServer = _.map(biddingStore.updateFields, (v, k) => {
      if (k === 'content') {
        return _.assign(
          {},
          {
            name: k,
            label: v,
            formType: 'component',
            component: props => {
              return <ReactQuill value={bidding[k]} />
            },
            fieldOptions: {
              initialValue: bidding[k],
              rules: [
                // { required: true, whitespace: true, message: '请输入主机名' }
              ]
            },
            placeholder: `请输入${v}`
          }
        )
      }
      /*
download 下载链接 
link 跳转链接 
html 描述html链接 
pdf 描述pdf链接 
content 内容描述
*/
      if (k === 'type') {
        return _.assign(
          {},
          {
            name: k,
            label: v,
            formType: 'select',
            optionData: [
              {
                id: 'download',
                value: '下载链接'
              },
              {
                id: 'link',
                value: '跳转链接'
              },
              {
                id: 'html',
                value: 'html 描述链接'
              },
              {
                id: 'pdf',
                value: 'pdf 描述链接'
              },
              {
                id: 'content',
                value: 'content 描述'
              }
            ],
            fieldOptions: {
              initialValue: bidding[k] || 'download',
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
            initialValue: bidding[k],
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
            paramsData.actionType == 'clone' ? undefined : bidding.id
        }
      },
      ...formDataTitileServer
    ]

    return <AddForm store={biddingStore} title={formDataTitileServer} />
  }
}
