import * as React from 'react'
import { Row, Col, Button } from 'antd'
import Echarts from '../../../components/Echarts/'

export default class Standard extends React.Component<{}, {}> {
  render() {
    return (
      <Row className="main-standard">
        <Col span={24} className="main-title">
          计算规范
        </Col>
        <Col span={12}>
          <Echarts />
        </Col>
        <Col span={12}>
          <h3>新疆造价规范</h3>
          <Button.Group>
            <Button>定额</Button>
            <Button>清单</Button>
          </Button.Group>
        </Col>
      </Row>
    )
  }
}
