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

    // standardStore.gets({
    //   typeName: this.state.typeName,
    //   codeName: '北京',
    //   putaway: 1,
    //   type: 1
    // })

    standardStore.setSelectMapItem(
      {
        name: '北京'
      },
      'quota',
      'guide'
    )
  }
  render() {
    const { standardStore } = this.props
    const { list } = standardStore
    console.log(list)
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

            <Button.Group>
              <Button type="primary">定额</Button>
              <Button className="default">清单</Button>
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
              <Button>查看更多</Button>
            </div>
          </Col>
        </Col>
      </Row>
    )
  }
}
