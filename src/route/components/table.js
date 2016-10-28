import {
  observer
} from 'mobx-react'
import {
  Table
} from 'antd'

@observer
export default class DataTable extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {columns, dataSource} = this.props
    const pagination = {
      total: dataSource.length,
      showSizeChanger: true,
      onShowSizeChange(current, pageSize) {
        console.log('Current: ', current, '; PageSize: ', pageSize);
      },
      onChange(current) {
        console.log('Current: ', current);
      },
    }

    return(
      <Table columns={columns}
        dataSource={dataSource}
        pagination={pagination}
        scroll={{ x: 1000 }}/>
      )
  }
}
