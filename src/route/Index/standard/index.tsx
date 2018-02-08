import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { Row, Col, Button } from 'antd'
import Echarts from '../../../components/Echarts/'
import { Link } from 'react-router-dom'

import './standard.less'

@inject('standardStore')
@observer
export default class Standard extends React.Component<any, any> {
  constructor(props: any) {
    super(props)

    this.state = {
      typeName: 'quota'
    }
  }
  componentWillMount() {
    const { standardStore } = this.props

    standardStore.gets({
      typeName: this.state.typeName,
      name: '北京',
      putaway: 1,
      type: 1
    })
  }
  render() {
    const { standardStore } = this.props
    const { list } = standardStore
    console.log(list)
    return (
      <Row className="main-standard">
        <Col span={24} className="main-title">
          计算规范
        </Col>
        <Col span={15}>
          <Echarts
            style={{
              width: '550px',
              height: '550px'
            }}
          />
        </Col>
        <Col span={9} className="main-content">
          <h3>新疆造价规范</h3>
          <Button.Group>
            <Button type="primary">定额</Button>
            <Button className="default">清单</Button>
          </Button.Group>
          <article>
            <Row className="main-content-row">
              {list.map((val: any, key: any) => {
                return (
                  <Link
                    key={key}
                    to={{
                      pathname: '/guide',
                      search: `?type=${this.state.typeName}&id=${val.id}`,
                      state: { type: this.state.typeName, id: val.id }
                    }}
                  >
                    <Col className="main-content-col">{val.fileName}</Col>
                  </Link>
                )
              })}
            </Row>
          </article>
        </Col>
      </Row>
    )
  }
}
