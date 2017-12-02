import * as React from 'react'
import { Row, Col } from 'antd'
import Echarts from '../../components/Echarts/'

export default class Standard extends React.Component<{}, {}> {
  render() {
    return (
      <Row className="standard">
        <Col span={14}>
          <Echarts
            style={{
              width: '550px',
              height: '550px'
            }}
          />
        </Col>
        <Col span={10}>
          <h3>展示啥</h3>
        </Col>
      </Row>
    )
  }
}
