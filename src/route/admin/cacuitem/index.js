import { inject, observer } from 'mobx-react'
import { Link } from 'react-router'

import Api from 'Api'
import Url from 'Url'

import FuncList from '../../components/switches/commonInfoList'
import AddCaculatorModal from './add'
import JSONView from '../../components/jsonview/edit'

var actions = ({ type, areaCode, id, formulaName }) => {
  return (
    <span>
      <Link
        to={`${Url.tableList}?type=${1}&code=${areaCode}&formulaId=${id}&path=${formulaName}`}
      >
        计算器列表
      </Link>
      <Link
        to={`${Url.rateList}?type=${1}&code=${areaCode}&formulaId=${id}&path=${formulaName}`}
      >
        计算器公式
      </Link>
    </span>
  )
}
@inject('projectStore')
@observer
export default class Caculators extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    const { projectStore, location: { query: { type, areaCode } } } = this.props
    projectStore.getServers({
      areaCode,
      type
    })
  }
  render() {
    const {
      projectStore,
      location: { query: { type, areaCode, path: urlPath } }
    } = this.props

    const bcData = ['首页', '计算器管理', urlPath]
    const { fields } = projectStore

    const projectHeader = _.map(fields, (v, k) => {
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
          store={this.props.projectStore}
          bcData={bcData}
          downloadCSV={Api.downloadCaculatorCSV}
          funcEnName={'project'}
          projectHeader={projectHeader}
          actions={actions}
        />
        <AddCaculatorModal />
      </div>
    )
  }
}
