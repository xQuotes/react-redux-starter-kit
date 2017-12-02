import * as React from 'react'
import { Row, Col } from 'antd'

export default class Index extends React.Component<{}, {}> {
  render() {
    return (
      <Row className="tools-component">
        <Col span={24} className="main-title">
          合同招投标规范
        </Col>
        <Col span={24} className="main-contain">
          <Row gutter={24}>合同招投标规范</Row>
        </Col>
      </Row>
    )
  }
}
