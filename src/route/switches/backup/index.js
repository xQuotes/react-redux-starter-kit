import {
  inject, observer
} from 'mobx-react'
import {
  Link
} from 'react-router'
import {
  Table
} from 'antd'

import Url from 'Url'

import SearchTable from './search'
import Status from './status'

import './backup.less'

@inject('backupStore') @observer
export default class Backup extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    const bcData = ['首页', '常用服务', '备份管理']
  }
  render() {
    const {backupStore} = this.props
    console.log(backupStore.toJS())
    let backups = backupStore.toJS() || []

    let fields = {
      id: "ID",
      host: "IP",
      name: "主机名",
      brand: "品牌",
      sn: "SN",
      day: "日期",
      e_time: "结束时间",
      s_time: "开始时间",
      status: "状态",
      // indexForSort: 0,
    }

    let dataList = backups

    let tableHeader = _.map(fields, (v, k) => {
      if (k == 'name') {
        return {
          title: v,
          dataIndex: k,
          key: k,
          width: 80,
          render: (value, record, index) => {
            return <Link to={`${Url.switchesBackup}/${record.id}`}>{record.name}</Link>
          }
        }
      } else if(k == 'status') {
        return {
          title: v,
          dataIndex: k,
          key: k,
          width: 80,
          render: (value) => {
            return Status.backupStatus[value]
          }
        }
      } else {
        return {
          title: v,
          dataIndex: k,
          key: k,
          width: 80
        } 
      }
    })

    const columns = _.isEmpty(tableHeader) ? [] : [
      ...tableHeader,
      {
        title: '操作',
        key: 'operation',
        width: 100,
        render: (text, record, index) => {
          return <Link to={`${Url.switchesBackup}/${record.id}`}>查看</Link>
        }
      } 
    ];

    return(
      <div className="switches-network">
        <div className="table-search">
          <SearchTable />
        </div>
        <div className={classNames({"tables": true})}>
          <Table columns={columns} dataSource={dataList} scroll={{ x: 1000 }} />
        </div>
      </div>
      )
  }
}

// module.exports = TypeBar
