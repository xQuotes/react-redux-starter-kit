import * as React from 'react'
import { Row, Col, Button } from 'antd'

export default class CaculatorResult extends React.Component<{}, {}> {
  render() {
    return (
      <Row>
        <Col span={24}>
          <h3>计算结果</h3>
          <div>THE CALCULATOR RESULTS</div>
        </Col>
        <Col span={24}>
          <Col span={12}>
            <Button>生成报告</Button>
          </Col>
          <Col span={12}>是否生成报告</Col>
        </Col>
      </Row>
    )
  }
}
