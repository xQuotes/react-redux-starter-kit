import * as React from 'react'
import { Card, Tabs, Button, Row, Col, List } from 'antd'

import Header from '../../components/Header/'
import Footer from '../../components/Footer/'
import MainCarousel from './carousel/index'

const TabPane = Tabs.TabPane

import './index.less'
import 'react-alice-carousel/lib/alice-carousel.css'

const data = [
  '德仁动态新闻动态新闻动态新闻动态新闻1',
  '德仁动态新闻动态新闻动态新闻动态新闻1222',
  '德仁动态新闻动态新闻动态新闻动态新闻22',
  '德仁动态新闻动态新闻动态新闻动态新闻',
  '德仁动态新闻动态新闻动态新闻动态新闻2'
]

const dataImg = [
  {
    url: 'http://www.jincaohr.com/Links/20122109572245258.jpg'
  },
  {
    url: 'http://www.jincaohr.com/Links/20122109572245258.jpg'
  },
  {
    url: 'http://www.jincaohr.com/Links/20122109572245258.jpg'
  },
  {
    url: 'http://www.jincaohr.com/Links/20122109572245258.jpg'
  },
  {
    url: 'http://www.jincaohr.com/Links/20122109572245258.jpg'
  },
  {
    url: 'http://www.jincaohr.com/Links/20122109572245258.jpg'
  },
  {
    url: 'http://www.jincaohr.com/Links/20122109572245258.jpg'
  },
  {
    url: 'http://www.jincaohr.com/Links/20122109572245258.jpg'
  },
  {
    url: 'http://www.jincaohr.com/Links/20122109572245258.jpg'
  }
]

export default class Hello extends React.Component<{}, {}> {
  render() {
    return (
      <div className="index">
        <MainCarousel />
        <Header {...this.props} />
        <div className="main-container index-container">
          <Card
            className="main-card"
            title="核心业务"
            bordered={false}
            noHovering={true}
          >
            <Card.Grid className="grid-style">
              <div className="title">劳务派遣</div>
              <p className="description">用人单位根据需要，向派遣机构提出所用人员条件和薪资待遇...</p>
            </Card.Grid>
            <Card.Grid className="grid-style">
              <div className="title">人力资源外包</div>
              <p className="description">企业根据需要将某一项或几项人力资源管理工作或职能外包...</p>
            </Card.Grid>
            <Card.Grid className="grid-style">
              <div className="title">呼叫中心外包业务</div>
              <p className="description">担任客户与企业之间的沟通桥梁,提供24小时一站式服务...</p>
            </Card.Grid>
          </Card>

          <Row>
            <Col span={11}>
              <Card title="" hoverable={false}>
                <Tabs defaultActiveKey="1" onChange={() => {}}>
                  <TabPane tab="德仁动态" key="1">
                    <List
                      size="small"
                      header={<div>Header</div>}
                      bordered={false}
                      dataSource={data}
                      renderItem={(item: string) => (
                        <List.Item>{item}</List.Item>
                      )}
                    />
                  </TabPane>
                  <TabPane tab="行业动态" key="2">
                    <List
                      size="small"
                      header={<div>Header</div>}
                      bordered={false}
                      dataSource={data}
                      renderItem={(item: string) => (
                        <List.Item>{item}</List.Item>
                      )}
                    />
                  </TabPane>
                </Tabs>
              </Card>
            </Col>
            <Col span={11} offset={1}>
              <Card title="" hoverable={false}>
                <Tabs
                  defaultActiveKey="1"
                  onChange={() => {}}
                  tabBarExtraContent={<Button>更多</Button>}
                >
                  <TabPane tab="招聘信息" key="1">
                    <List
                      size="small"
                      header={<div>Header</div>}
                      bordered={false}
                      dataSource={data}
                      renderItem={(item: string) => (
                        <List.Item>{item}</List.Item>
                      )}
                    />
                  </TabPane>
                </Tabs>
              </Card>
            </Col>
          </Row>

          <div
            style={{
              width: '100%',
              overflowX: 'auto'
            }}
          >
            <div
              style={{
                width: dataImg.length * 220 + 'px'
              }}
              className="image-item"
            >
              {dataImg.map((v, k) => {
                return (
                  <img
                    src={v.url}
                    key={k}
                    style={{
                      width: '200px',
                      padding: '10px'
                    }}
                  />
                )
              })}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    )
  }
}
