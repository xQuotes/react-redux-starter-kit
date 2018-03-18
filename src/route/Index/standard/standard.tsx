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
    const { list, typeName } = standardStore
    return (
      <Row className="main-standard">
        <Col span={15}>
          <Echarts
            {...this.props}
            style={{
              width: '550px',
              height: '550px'
            }}
            componentType={standardStore.componentType}
            typeName={standardStore.typeName}
            store={standardStore}
          />
        </Col>
        <Col span={9} className="main-content">
          <div className="main-content-title">
            <div style={{
              float: 'left'
            }}>
              <div style={{ fontSize: '24px' }}>Cost specification</div>
              <h3 style={{
                margin: 0,
                padding: 0,
                fontSize: '24px'
              }}>{standardStore.selectMapItem.name}造价规范</h3>
              <span style={{
                width: '20px',
                height: '2px',
                backgroundColor: '#048cf4',
                display: 'inline-block'
              }}></span>
            </div>
            <Button.Group style={{
              float: 'right'
            }}>
              <Link
                to={{
                  pathname: '/guide',
                  search: `?type=quota`,
                  state: { type: 'quota' }
                }}
                onClick={() => {
                  standardStore.setSelectMapItem(
                    {
                      name: '北京'
                    },
                    'quota',
                    'guide'
                  )
                }}
              >{typeName === 'quota' ? <Button
                type="primary"
                style={{
                  width: '80px',
                  borderRadiusLeft: '6px'
                }}
              >定额</Button> : <Button
                style={{
                  width: '80px',
                  borderRadiusLeft: '6px'
                }}
              >定额</Button>}
              </Link>
              <Link
                to={{
                  pathname: '/guide',
                  search: `?type=detailed`,
                  state: { type: 'detailed' }
                }}
                onClick={() => {
                  standardStore.setSelectMapItem(
                    {
                      name: '北京'
                    },
                    'detailed',
                    'guide'
                  )
                }}
              >{typeName === 'detailed' ? <Button type="primary" style={{
                width: '80px',
                borderRadiusRight: '6px'
              }}>清单</Button> : <Button style={{
                width: '80px',
                borderRadiusRight: '6px'
              }}>清单</Button>}
              </Link>
            </Button.Group>
          </div>
          <article className="main-content-article">
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
                    <Col className="main-content-col">{`${key + 1}. ${val.fileName}`}</Col>
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
