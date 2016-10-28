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
    return(
      <Table columns={columns}
        dataSource={dataSource}
        scroll={{ x: 1000 }}/>
      )
  }
}
