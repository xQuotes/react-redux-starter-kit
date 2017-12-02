import * as React from 'react'
import { Row, Col } from 'antd'

export default class Index extends React.Component<{}, {}> {
  render() {
    return (
      <Row className="tools-component">
        <Col span={24} className="main-title">
          计算规则查询
        </Col>
        <Col span={24} className="main-contain">
          <Row gutter={24}>计算规则查询</Row>
        </Col>
      </Row>
    )
  }
}
