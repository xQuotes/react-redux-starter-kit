import { inject, observer } from 'mobx-react'
import { Link } from 'react-router'

import Api from 'Api'
import Url from 'Url'

import FuncList from '../../components/switches/commonInfoList'
import AddDizhizaihaiModal from './add'
import JSONView from '../../components/jsonview/index'

@inject('dizhizaihaiStore')
@observer
export default class Dizhizaihais extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    const { dizhizaihaiStore } = this.props
    // dizhizaihaiStore.getServers({
    //   type: 11
    // })
  }
  render() {
    const bcData = ['首页', '计算器管理', '列表']
    const { dizhizaihaiStore } = this.props
    const { fields } = dizhizaihaiStore

    const dizhizaihaiHeader = _.map(fields, (v, k) => {
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
          store={this.props.dizhizaihaiStore}
          bcData={bcData}
          downloadCSV={Api.downloadDizhizaihaiCSV}
          funcEnName={'dizhizaihai'}
          dizhizaihaiHeader={dizhizaihaiHeader}
          actions={record => {
            return (
              <div>
                <Link
                  to={`${Url.projectList}?areaCode=${
                    record.id
                  }&type=${13}&path=${record.label}`}
                >
                  计算器项目
                </Link>
                {/* <Link
                  to={`${Url.formulaList}?type=${101}&code=${record.id}`}
                  style={{
                    marginLeft: '20px'
                  }}
                >
                  计算器公式
                </Link> */}
              </div>
            )
          }}
          deleteAction={true}
        />
        <AddDizhizaihaiModal />
      </div>
    )
  }
}
