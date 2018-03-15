import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { Row, Col, Button } from 'antd'
import AreaSelect from '../../../components/Echarts/select'
import { Link } from 'react-router-dom'

import './standard.less'

@inject('standardStore')
@observer
export default class Standard extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
  }
  componentWillMount() {
    const { standardStore } = this.props

    console.log(this.props)

    const { location: { state } } = this.props
    const { type } = state || { type: null }

    standardStore.setSelectMapItem(
      {
        name: '北京'
      },
      type || 'quota',
      'guide'
    )
  }
  render() {
    const { standardStore } = this.props
    const { list, typeName } = standardStore

    return (
      <Row className="main-standard">
        <Col span={24} className="main-title">
          <div className="main-title-ch">
            <span className="main-title-line"> &nbsp;</span>
            <span>计算规范</span>
            <span className="main-title-line"> &nbsp;</span>
          </div>
          <div className="main-title-en">Computation specification</div>
        </Col>
        <Col span={24}>
          <Col span={11} className="guide-left">
            <img src={require('../../../common/index/规范.jpg')} alt="" />

            <Button.Group className="btn-group">
              <Link
                to={{
                  pathname: '/guide',
                  search: `?type=quota`,
                  state: { type: 'quota' }
                }}
              ><Button type="primary" className="btn-group-dinge" onClick={() => {
                standardStore.setSelectMapItem(
                  {
                    name: '北京'
                  },
                  'quota',
                  'guide'
                )
              }}>
                  {typeName === 'quota' && <img src={require('../../../common/images/首页/fd.png')} alt="" className="btn-icon-dinge" />}
                  定额</Button></Link>
              <Link
                to={{
                  pathname: '/guide',
                  search: `?type=detailed`,
                  state: { type: 'detailed' }
                }}
              ><Button type="primary" className="btn-group-qingdan" onClick={() => {
                standardStore.setSelectMapItem(
                  {
                    name: '北京'
                  },
                  'detailed',
                  'guide'
                )
              }}>
                  {typeName === 'detailed' && <img src={require('../../../common/images/首页/fd.png')} alt="" className="btn-icon-dinge" />}
                  清单</Button></Link>
            </Button.Group>
          </Col>
          <Col span={11} offset={2} className="guide-right">
            <div className="guide-header">
              <div className="en-title">Sinking</div>
              <div className="zh-title">造价规范</div>
              <span className="br" />
              <div className="area-select">
                <AreaSelect
                  componentType={standardStore.componentType}
                  typeName={standardStore.typeName}
                  store={standardStore}
                />
              </div>
            </div>
            <div className="guide-content">
              <Row className="main-content-row">
                {list.map((val: any, key: any) => {
                  return (
                    <Link
                      key={key}
                      to={{
                        pathname: '/guide',
                        search: `?type=${standardStore.typeName}&id=${val.id}`,
                        state: { type: standardStore.typeName, id: val.id }
                      }}
                    >
                      <Col className="main-content-col">{val.fileName}</Col>
                    </Link>
                  )
                })}
              </Row>
            </div>
            <div className="guide-footer">
              <Link
                to={{
                  pathname: '/guide',
                  search: `?type=${standardStore.typeName}`,
                  state: { type: standardStore.typeName }
                }}
              ><span className="view-more"><span style={{ marginLeft: '-10px', color: '#555' }}>查看更多</span></span></Link>
            </div>
          </Col>
        </Col>
      </Row>
    )
  }
}
