import * as React from 'react'
import { Row, Col, Card } from 'antd'

import Header from '../../../components/Header/'
import Footer from '../../../components/Footer/'
import MainCarousel from '../carousel/index'

import '../index.less'
import './about.less'

export default class About extends React.Component<{}, {}> {
  render() {
    return (
      <div className="index">
        <MainCarousel />
        <Header {...this.props} />
        <div className="main-container about-container">
          <Row>
            <Col span={12} offset={6} className="menu-content">
              <Col span={6} offset={3}>
                <span className="menu">专 业 化</span>
              </Col>
              <Col span={6}>
                <span className="menu">一 体 化</span>
              </Col>
              <Col span={6}>
                <span className="menu">合作共赢</span>
              </Col>
            </Col>
          </Row>
          <Card title="关于德仁" className="about-deren">
            <p>德仁凭借先进的服务理念、科学的管理和灵活的经营方式，充分发挥现有管理、人才优势，坚持走人力资源服务专业化的道路，努力构建人力资源交流、中介、派遣、培训和咨询服务的一体化，全力满足客户日益增长的人力资源服务需求。</p>
            <p>客户永远是德仁生存和发展的根本，并以顾客满意为企业最高战略；德仁坚持"管理＋服务"的发展战略，通过在管理和服务上的创新，不断提高管理和服务水平，为客户提供全套、多层次的人力资源专业化服务，与客户密切合作、共同发展。</p>
          </Card>
        </div>
        <Footer />
      </div>
    )
  }
}
