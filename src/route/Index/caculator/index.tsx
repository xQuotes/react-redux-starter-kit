import * as React from 'react'
import { Row, Col } from 'antd'
import { inject, observer } from 'mobx-react'
import { Link } from 'react-router-dom'

import './caculator.less'

export const caculator = [
  {
    type: '11',
    calculatorName: '造价计算器'
  },
  {
    type: '13',
    calculatorName: '地质灾害评估收费计算器'
  },
  {
    type: '15',
    calculatorName: '水土保持计算器'
  },
  {
    type: '12',
    calculatorName: '施工图计算器'
  }
]

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

    let caculators = list.concat(caculator)
    return (
      <div className="main-caculator">
        <Row className="main">
          <Col span={24} className="main-title">
            <div className="main-title-ch">
              <span className="main-title-line"> &nbsp;</span>
              <span>计算器</span>
              <span className="main-title-line"> &nbsp;</span>
            </div>
            <div className="main-title-en">Caculator</div>
          </Col>
          <Col span={24} className="caculator-main">
            {caculators.map((v: any, k: any) => {
              return (
                <Col span={6} key={k}>
                  <Link className="caculator-item" to={{
                    pathname: '/caculator',
                    search: `?type=${v.type}`,
                    state: {
                      type: v.type
                    }
                  }} >
                    <div className="caculator-item">
                      <div>
                        <img
                          src={require(`../../../common/images/首页/${v.calculatorName}.png`)}
                          alt=""
                          className="cacu-img"
                        />
                      </div>
                      <div className="cacu-name">{v.calculatorName}</div>
                    </div>
                  </Link>
                  {/* <div>
                  <a href={v.clickurl}>{v.clickname}</a>
                </div> */}
                </Col>
              )
            })}
          </Col>
        </Row>
      </div>
    )
  }
}
