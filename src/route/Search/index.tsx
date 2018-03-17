import * as React from 'react'
import { inject, observer } from 'mobx-react'
import queryString from 'query-string'

import Header from '../../components/Header/'
import Footer from '../../components/Footer/'

import { List, Col, Card, Button } from 'antd'
import { Link } from 'react-router-dom'

import './search.less'

@inject('searchStore')
@observer
export default class Caculator extends React.Component<any, {}> {
  componentWillMount() {
    const { searchStore, location } = this.props
    const state = queryString.parse(location.search) || {}
    // searchStore.selectCostindex(state.typeName, state.typeName)
    searchStore.getCostindex({
      putaway: 1,
      type: 1,
      typeName: state.typeName
    })


    searchStore.getTargetdata({})
  }
  onChangeData = (type: any) => () => {
    const { searchStore } = this.props
    // searchStore.selectCostindex(type, type)
    searchStore.getCostindex({
      putaway: 1,
      type: 1,
      typeName: type
    })
  }
  render() {
    const { searchStore, location } = this.props
    const { targetdata } = searchStore
    console.log(targetdata)
    // const { state } = location || { state:  }
    const state = queryString.parse(location.search)
    // console.log(location.search, queryString.parse(location.search))
    // const { costindexs, costindex, laborcosts, laborcost } = searchStore
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
                height: '600px',
                overflowY: 'auto',
                margin: '20px 0'
              }}>
                <List
                  header={false}
                  footer={false}
                  bordered
                  dataSource={searchStore[state.typeName + 's']}
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
                            url: 'item.url'
                          }
                        }}
                      >
                        {item.fileName}
                      </Link>
                    </List.Item>
                  )}
                />
              </div>
            </Card>
          </div>
        </div>
        <Footer />
      </div >
    )
  }
}
