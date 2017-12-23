import * as React from 'react'
import { Row, Col } from 'antd'
import { inject, observer } from 'mobx-react'

import './caculator.less'

// const caculator = [
//   {
//     img: require('./gckc.jpg'),
//     name: '工程勘查',
//     clickname: '点击计算',
//     clickurl: 'http://www.baidu.com'
//   },
//   {
//     img: require('./gckc.jpg'),
//     name: '工程勘查',
//     clickname: '点击计算',
//     clickurl: 'http://www.baidu.com'
//   },
//   {
//     img: require('./gckc.jpg'),
//     name: '工程勘查',
//     clickname: '点击计算',
//     clickurl: 'http://www.baidu.com'
//   },
//   {
//     img: require('./gckc.jpg'),
//     name: '工程勘查',
//     clickname: '点击计算',
//     clickurl: 'http://www.baidu.com'
//   },
//   {
//     img: require('./gckc.jpg'),
//     name: '工程勘查',
//     clickname: '点击计算',
//     clickurl: 'http://www.baidu.com'
//   },
//   {
//     img: require('./gckc.jpg'),
//     name: '工程勘查',
//     clickname: '点击计算',
//     clickurl: 'http://www.baidu.com'
//   }
// ]

@inject('caculatorStore')
@observer
export default class Caculator extends React.Component<any, any> {
  componentWillMount() {
    const { caculatorStore } = this.props
    caculatorStore.getServers({})
  }
  render() {
    const { caculatorStore } = this.props
    const { list } = caculatorStore
    console.log(caculatorStore)
    return (
      <Row className="main-caculator">
        <Col span={24} className="main-title">
          计算器
        </Col>
        <Col span={24}>
          {list.map((v: any, k: any) => {
            return (
              <Col span={8} key={k} className="caculator-item">
                <div>
                  <img
                    src={require('./gckc.jpg')}
                    alt=""
                    className="cacu-img"
                  />
                </div>
                <div>{v.calculatorName}</div>
                {/* <div>
                  <a href={v.clickurl}>{v.clickname}</a>
                </div> */}
              </Col>
            )
          })}
        </Col>
      </Row>
    )
  }
}
