import * as React from 'react'
import { Row, Col, Button } from 'antd'

import ResultTable from './table'
import ResultForm from './form'

export default class CaculatorResult extends React.Component<{}, {}> {
  render() {
    return (
      <Row className="caculator-result">
        <Col span={24} className="title">
          <h3>计算结果</h3>
          <h4>THE CALCULATOR RESULTS</h4>
          <span className="border" />
        </Col>
        <Col span={24}>
          <Col span={12} className="result-table">
            <ResultTable />
            <Button size="large" type="primary" className="result-btn">
              生成报告
            </Button>
          </Col>
          <Col span={12} className="result-table">
            <ResultForm />
          </Col>
        </Col>
      </Row>
    )
  }
}
