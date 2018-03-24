import * as React from 'react'
import { Row, Col } from 'antd'
import { inject, observer } from 'mobx-react'
import { Link } from 'react-router-dom'

import './caculator.less'

// export const caculator = [
//   {
//     type: '11',
//     calculatorName: '造价计算器'
//   },
//   {
//     type: '13',
//     calculatorName: '地质灾害评估收费计算器'
//   },
//   {
//     type: '15',
//     calculatorName: '水土保持计算器'
//   },
//   {
//     type: '12',
//     calculatorName: '施工图计算器'
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
    const { caculatorStore, location } = this.props
    const { list } = caculatorStore
    const { state } = location
    const { type } = state || { type: '' }

    let caculators = list
    //.concat(caculator)

    return (
      <div className="main-caculator">
        <Row className="main">
          <Col span={24} className="main-title-left">
            <img src={require('../../../common/images/计算器修改/sdf.png')} className="main-title-left-icon" />
            <div className="main-title-left-title">
              <div className="main-title-ch">
                <span className="main-title-line"> &nbsp;</span>
                <span>其他计算器</span>
                <span className="main-title-line"> &nbsp;</span>
              </div>
              <div className="main-title-en">Caculator</div>
            </div>
          </Col>
          <Col span={24} className="caculator-main">
            {caculators.map((v: any, k: any) => {
              return (
                <Col span={4} key={k}>

                  {v.disabled ? <div className={`caculator-item`}>
                    <div>
                      <img
                        src={require(`../../../common/images/首页/${v.calculatorName}.png`)}
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
                  }}
                    onClick={() => {
                      caculatorStore.setSelectMapItem(
                        {
                          name: '全国',
                          value: 0
                        },
                        v.type,
                        ''
                      )
                    }} >
                      <div className={`caculator-item` + ' ' + (type === v.type && "caculator-item-active")}>
                        <div>
                          <img
                            src={require(`../../../common/images/首页/${v.calculatorName}.png`)}
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
