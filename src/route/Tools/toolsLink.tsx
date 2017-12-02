import * as React from 'react'
import { Row, Col } from 'antd'

const tools = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]

export default class Index extends React.Component<{}, {}> {
  render() {
    return (
      <Row className="tools-component">
        <Col span={24} className="main-title">
          工具箱
        </Col>
        <Col span={24} className="main-contain">
          <Row gutter={24}>
            {tools.map((v, k) => (
              <Col span={6} key={k}>
                {v}
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    )
  }
}
