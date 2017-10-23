import { inject, observer } from 'mobx-react'
import { Link } from 'react-router'

import Api from 'Api'
import Url from 'Url'

import FuncList from '../../components/switches/commonInfoList'
import AddMapdataModal from './add'
import JSONView from '../../components/jsonview/index'

@inject('mapdataStore')
@observer
export default class Mapdatas extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    const { mapdataStore } = this.props
    mapdataStore.getServers({
      type: 11
    })
  }
  render() {
    const bcData = ['首页', '计算器管理', '列表']
    const { mapdataStore } = this.props
    const { fields } = mapdataStore

    const mapdataHeader = _.map(fields, (v, k) => {
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
          store={this.props.mapdataStore}
          bcData={bcData}
          downloadCSV={Api.downloadMapdataCSV}
          funcEnName={'mapdata'}
          mapdataHeader={mapdataHeader}
          actions={() => {
            return <Link to={`${Url.tableList}?type=1`}>计算器列表</Link>
          }}
        />
        <AddMapdataModal />
      </div>
    )
  }
}
