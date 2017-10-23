import * as React from 'react'
import { Row, Col } from 'antd'

import './caculator.less'

const caculator = [
  {
    img: '',
    name: '工程勘查',
    clickname: '点击计算',
    clickurl: 'http://www.baidu.com'
  },
  {
    img: '',
    name: '工程勘查',
    clickname: '点击计算',
    clickurl: 'http://www.baidu.com'
  },
  {
    img: '',
    name: '工程勘查',
    clickname: '点击计算',
    clickurl: 'http://www.baidu.com'
  },
  {
    img: '',
    name: '工程勘查',
    clickname: '点击计算',
    clickurl: 'http://www.baidu.com'
  },
  {
    img: '',
    name: '工程勘查',
    clickname: '点击计算',
    clickurl: 'http://www.baidu.com'
  },
  {
    img: '',
    name: '工程勘查',
    clickname: '点击计算',
    clickurl: 'http://www.baidu.com'
  }
]

export default class Caculator extends React.Component<any, any> {
  render() {
    return (
      <Row className="main-caculator">
        <Col span={24} className="main-title">
          计算器
        </Col>
        <Col span={24}>
          {caculator.map((v, k) => {
            return (
              <Col span={8} key={k}>
                <div>
                  <img src={v.img} alt="" className="cacu-img" />
                </div>
                <div>{v.name}</div>
                <div>
                  <a href={v.clickurl}>{v.clickname}</a>
                </div>
              </Col>
            )
          })}
        </Col>
      </Row>
    )
  }
}
