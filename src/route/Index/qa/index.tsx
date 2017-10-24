import * as React from 'react'
import { Row, Col } from 'antd'

export default class Hello extends React.Component<{}, {}> {
  render() {
    return (
      <Row>
        <Col span={24}>col</Col>
      </Row>
    )
  }
}
