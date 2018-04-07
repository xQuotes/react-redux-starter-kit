import * as React from 'react'
import { Row, Col } from 'antd'
import { inject, observer } from 'mobx-react'
import { Link } from 'react-router-dom'

import './caculator.less'

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

    let caculators = list
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
                  {v.disabled ?
                    <div className="caculator-item disabled">
                      <div>
                        <img
                          src={require(`../../../common/images/首页/${v.type + ''}.png`)}
                          alt=""
                          className="cacu-img"
                        />
                      </div>
                      <div className="cacu-name">{v.calculatorName}</div>
                      <div className="vwarning">努力开发中</div>
                    </div> : <Link className="caculator-item" to={{
                      pathname: '/caculator',
                      search: `?type=${v.type}`,
                      state: {
                        type: v.type
                      }
                    }} >
                      <div className="caculator-item">
                        <div>
                          <img
                            src={require(`../../../common/images/首页/${v.type + ''}.png`)}
                            alt=""
                            className="cacu-img"
                          />
                        </div>
                        <div className="cacu-name">{v.calculatorName}</div>
                      </div>
                    </Link>}
                </Col>
              )
            })}
          </Col>
        </Row>
      </div>
    )
  }
}
