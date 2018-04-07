import * as React from 'react'
import { inject, observer } from 'mobx-react'
import queryString from 'query-string'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

import Header from '../../components/Header/'
import Footer from '../../components/Footer/'

import { List, Col, Card, Button, Collapse } from 'antd'
const Panel = Collapse.Panel

import { Link } from 'react-router-dom'

import _groupBy from 'lodash.groupby'
import _map from 'lodash.map'

import './search.less'

const colors = ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf"]

@inject('searchStore')
@observer
export default class Caculator extends React.Component<any, {}> {
  componentWillMount() {
    const { searchStore, location } = this.props
    const state = queryString.parse(location.search) || {}
    // searchStore.selectCostindex(state.typeName, state.typeName)
    if (state.typeName === 'costexample') {
      searchStore.getTargetdata({})
    } else {
      searchStore.getCostindex({
        putaway: 1,
        type: 1,
        typeName: state.typeName
      })
    }
  }
  onChangeData = (type: any) => () => {
    const { searchStore } = this.props
    // searchStore.selectCostindex(type, type)
    if (type === 'costexample') {

      searchStore.getTargetdata({})

    } else {
      searchStore.getCostindex({
        putaway: 1,
        type: 1,
        typeName: type
      })
    }
  }
  render() {
    const { searchStore, location } = this.props
    const { targetdata } = searchStore
    const dataTime = {}
    const dataY = {}
    targetdata.map((v: any, key: number) => {
      dataY[v.projectName] = colors[key % 10]
      if (dataTime[`${v.yearData} ${v.monthData}`]) {
        dataTime[`${v.yearData} ${v.monthData}`] = {
          ...dataTime[`${v.yearData} ${v.monthData}`],
          [v.projectName]: Number(v.priceData)
        }
      } else {
        dataTime[`${v.yearData} ${v.monthData}`] = {
          key: v.id,
          time: `${v.yearData} ${v.monthData}`,
          [v.projectName]: Number(v.priceData)
        }
      }
    })
    const state = queryString.parse(location.search)
    // console.log(location.search, queryString.parse(location.search))
    // const { costindexs, costindex, laborcosts, laborcost } = searchStore
    const listMap = searchStore[state.typeName + 's']

    const listGroup = _groupBy(listMap, v => v.fileName.split(/年|月/)[0])

    return (
      <div>
        <Header {...this.props} />
        <div className="search">
          <div className="search-main">
            <Card style={{
              padding: '30px'
            }}>
              <div style={{
                overflow: 'hidden'
              }}>
                <Col span={6} className="main-title-left">
                  <img src={require('../../common/images/计算器修改/sdf.png')} className="main-title-left-icon" />
                  <div className="main-title-left-title">
                    <div className="main-title-ch">
                      <span className="main-title-line"> &nbsp;</span>
                      <span style={{ fontSize: '16px' }}>指标查询</span>
                      <span className="main-title-line"> &nbsp;</span>
                    </div>
                    <div className="main-title-en" style={{ fontSize: '16px' }}>Technical tender query</div>
                  </div>
                </Col>
                <Col span={18} style={{
                  textAlign: 'right'
                }}>
                  <Link to={{
                    pathname: '/search',
                    search: `?typeName=costexample`,
                    state: {
                      type: 'costexample'
                    }
                  }} >
                    {state.typeName === 'costexample' ? <Button
                      type="primary" ghost style={{
                        borderRadius: '20px',
                        margin: '5px',
                        width: '110px',
                        height: '35px',
                        fontSize: '14px'
                      }} onClick={this.onChangeData('costexample')}>造价实例</Button> :
                      <Button style={{
                        borderRadius: '20px',
                        margin: '5px',
                        width: '110px',
                        height: '35px',
                        fontSize: '14px'
                      }} onClick={this.onChangeData('costexample')}>造价实例</Button>}
                  </Link>
                  <Link to={{
                    pathname: '/search',
                    search: `?typeName=costindex`,
                    state: {
                      type: 'costindex'
                    }
                  }} >{state.typeName === 'costindex' ? <Button
                    type="primary"
                    ghost
                    style={{
                      borderRadius: '20px',
                      margin: '5px',
                      width: '110px',
                      height: '35px',
                      fontSize: '14px'
                    }} onClick={this.onChangeData('costindex')}>造价指数</Button> : <Button
                      style={{
                        borderRadius: '20px',
                        margin: '5px',
                        width: '110px',
                        height: '35px',
                        fontSize: '14px'
                      }} onClick={this.onChangeData('costindex')}>造价指数</Button>}
                  </Link>
                  <Link to={{
                    pathname: '/search',
                    search: `?typeName=laborcost`,
                    state: {
                      type: 'laborcost'
                    }
                  }} >{state.typeName === 'laborcost' ? <Button
                    type="primary"
                    ghost
                    style={{
                      borderRadius: '20px',
                      margin: '5px',
                      width: '110px',
                      height: '35px',
                      fontSize: '14px'
                    }} onClick={this.onChangeData('laborcost')}>人工成本</Button> : <Button
                      style={{
                        borderRadius: '20px',
                        margin: '5px',
                        width: '110px',
                        height: '35px',
                        fontSize: '14px'
                      }} onClick={this.onChangeData('laborcost')}>人工成本</Button>}
                  </Link>
                </Col>
              </div>
              <div style={{
                overflowY: 'auto',
                margin: '20px 0',
                minHeight: '600px'
              }}>
                {state.typeName !== 'costexample' && <Collapse>
                  {_map(listGroup, (val: any, key: any) => {
                    return <Panel header={key + '年'} key={key}>
                      <List
                        header={false}
                        footer={false}
                        bordered
                        dataSource={val}
                        renderItem={(item: any) => (
                          <List.Item>
                            <Link
                              onClick={() => {
                                searchStore.selectCostindex(state.typeName, item)
                              }}
                              to={{
                                pathname: '/search/' + state.typeName,
                                search: location.search + `&url=${item.url}`,
                                state: {
                                  url: item.url
                                }
                              }}
                            >
                              {item.fileName}
                            </Link>
                          </List.Item>
                        )}
                      />
                    </Panel>
                  })}
                </Collapse>}
                {state.typeName === 'costexample' &&
                  <LineChart width={800} height={300} data={_map(dataTime, v => v)}>
                    <XAxis dataKey="time" />
                    <YAxis domain={[85, 'dataMax']} />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                    {_map(dataY, (v: any, key: string) => <Line type="monotone" dataKey={key} stroke={v} key={key} />)}
                  </LineChart>}
              </div>
            </Card>
          </div>
        </div>
        <Footer />
      </div >
    )
  }
}
