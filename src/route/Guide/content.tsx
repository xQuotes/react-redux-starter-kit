import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { Row, Col } from 'antd'

@inject('standardStore')
@observer
export default class Index extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      datatext: '',
      current: '',
      fileName: ''
    }
  }

  render() {
    const { standardStore, location: { state } } = this.props
    const { list } = standardStore
    const { id } = state || { id: '' }
    const item = list.find((val: any) => val.id === id) || {}

    return (
      <Row className="tools-component">
        <Col span={24} className="main-title">
          {item.fileName}
        </Col>
        <Col span={24} className="main-contain">
          <iframe src={item.url} width="100%" height="1000px" frameBorder="0" />
        </Col>
      </Row>
    )
  }
}
