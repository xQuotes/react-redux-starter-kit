import * as React from 'react'
import { Row, Col, Card } from 'antd'
import { inject, observer } from 'mobx-react'
import { Link } from 'react-router-dom'
import moment from 'moment'

const mouth = ['Jan',
  'Feb',
  'March',
  'April',
  'May',
  'June',
  'July',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec']

import './indicator.less'

@inject('searchStore', 'searchStore')
@observer
export default class Indicator extends React.Component<any, {}> {
  componentWillMount() {
    const { searchStore } = this.props

    // indicatorStore.setSelectMapItem({
    //   searchData: {
    //     typeName: 'costindex',
    //     pageNum: 1,
    //     pageSize: 10
    //   }
    // })

    searchStore.getCostindex({
      putaway: 1,
      type: 1,
      typeName: 'costindex'
    })
  }
  render() {
    const { searchStore } = this.props
    const { costindexs: list } = searchStore

    const one = list[0] || {}
    const six = list.slice(1, 6) || []

    return (
      <div className="main-indicator">
        <Row className="main">
          <Col span={24} className="main-title">
            <div className="main-title-ch">
              <span className="main-title-line"> &nbsp;</span>
              <span>指标查询</span>
              <span className="main-title-line"> &nbsp;</span>
            </div>
            <div className="main-title-en">Index query</div>
          </Col>
          <Col span={24}>
            <Col span={12} className="main-contain">
              {six.map((v: any, k: number) => {
                return (
                  <Col span={24} className="main-item" key={k}>
                    <Link
                      onClick={() => {
                        searchStore.selectCostindex('costindex', v)
                      }}
                      to={{
                        pathname: '/search/costindex',
                        search: location.search + `&url=${v.url}`,
                        state: {
                          url: v.url
                        }
                      }}>
                      <Col span={6} style={{
                        padding: '10px 0',
                        textAlign: 'center'
                      }}><span style={{
                        fontSize: '34px'
                      }}>{moment(v.updateTime).get('date')}</span>
                        <span style={{
                          fontSize: '14px',
                          marginLeft: '10px',
                          color: '#ddd'
                        }}>{mouth[moment(v.updateTime).get('month')]}</span></Col>
                      <Col span={18} className="main-item-text">
                        <div>{v.fileName}</div>
                        <div style={{}}>{(v.documentDescription || '').slice(0, 20) + '...'}</div>
                      </Col>
                    </Link>
                  </Col>
                )
              })}
            </Col>
            <Col span={10} offset={1}>
              <Link
                onClick={() => {
                  searchStore.selectCostindex('costindex', one)
                }}
                to={{
                  pathname: '/search/costindex',
                  search: location.search + `&url=${one.url}`,
                  state: {
                    url: one.url
                  }
                }}>
                <Card style={{ height: '420px' }}
                  hoverable
                  cover={<div style={{ position: 'relative' }}>
                    <img alt="example" src={require('../../../common/images/首页/52453.png')} />
                    <div style={{
                      position: 'absolute',
                      backgroundColor: '#3c8cff',
                      width: '70px',
                      height: '70px',
                      textAlign: 'center',
                      padding: '5px',
                      bottom: 0
                    }}><span style={{
                      display: 'block',
                      fontSize: '20px',
                      color: '#fff',
                    }}>{moment(one.updateTime).get('date')}</span>
                      <span style={{
                        display: 'block',
                        fontSize: '20px',
                        color: '#fff'
                      }}>{mouth[moment(one.updateTime).get('month')]}</span></div>
                  </div>}
                >
                  <Card.Meta
                    title={one.fileName}
                    description={<div>
                      <div>{(one.documentDescription || '').slice(0, 20) + '...'}</div>
                    </div>}
                  />
                </Card>
              </Link>
            </Col>
          </Col>
        </Row>
      </div>
    )
  }
}
