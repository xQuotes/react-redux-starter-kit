import { inject, observer } from 'mobx-react'
import { Link } from 'react-router'

import Api from 'Api'
import Url from 'Url'

import FuncList from '../../components/switches/commonInfoList'
import AddGuidedataModal from './add'
import JSONView from '../../components/jsonview/index'

@inject('guidedataStore')
@observer
export default class Guidedatas extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    const { guidedataStore } = this.props
    // guidedataStore.getServers({
    //   type: 11
    // })
  }
  render() {
    const bcData = ['首页', '计算器管理', '列表']
    const { guidedataStore } = this.props
    const { fields } = guidedataStore

    const guidedataHeader = _.map(fields, (v, k) => {
      if (k === 'presetValue') {
        return {
          title: v,
          dataIndex: k,
          key: k,
          width: 300,
          render: (text, record, index) => {
            let val = {}

            try {
              val = JSON.parse(text) || {}
            } catch (err) {
              val = {}
            }

            return <JSONView value={val} />
          }
        }
      }

      if (k === 'presetValue') {
        return {
          title: v,
          dataIndex: k,
          key: k,
          width: 300,
          render: (text, record, index) => {
            return <JSONView value={JSON.parse(text)} />
          }
        }
      }
      return {
        title: v,
        dataIndex: k,
        key: k,
        width: 105,
        render: (text, record, index) => {
          return text
        }
      }
    })
    return (
      <div className="switches-network">
        <FuncList
          rmAdd={true}
          store={this.props.guidedataStore}
          bcData={bcData}
          downloadCSV={Api.downloadGuidedataCSV}
          funcEnName={'guidedata'}
          guidedataHeader={guidedataHeader}
          actions={record => {
            console.log(record)
            return (
              <Link to={`${Url.guideList}?code=${record.id}`}>计算器列表</Link>
            )
          }}
          deleteAction={true}
        />
        <AddGuidedataModal />
      </div>
    )
  }
}
