import * as React from 'react'
import { Row, Col } from 'antd'
import { Link } from 'react-router-dom'

const news = [
  {
    id: 1,
    title: '2016年三月造价指数',
    time: '2016年1月1日'
  },
  {
    id: 2,
    title: '2016年三月造价指数',
    time: '2016年1月1日'
  },
  {
    id: 3,
    title: '2016年三月造价指数',
    time: '2016年1月1日'
  },
  {
    id: 4,
    title: '2016年三月造价指数',
    time: '2016年1月1日'
  }
]
export default class Indicator extends React.Component<{}, {}> {
  render() {
    return (
      <Row className="main-indicator">
        <Col span={24} className="main-title">
          指标查询
        </Col>
        <Col span={24} className="main-contain">
          {news.map((v, k) => {
            return (
              <Col span={24} className="main-item" key={k}>
                <Col span={12}>
                  <Link to={`/news/${v.id}`}>{v.title}</Link>
                </Col>
                <Col span={12}>{v.time}</Col>
              </Col>
            )
          })}
        </Col>
      </Row>
    )
  }
}
