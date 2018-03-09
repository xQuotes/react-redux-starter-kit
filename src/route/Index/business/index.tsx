import * as React from 'react'
import { Row, Col, Card } from 'antd'

import Header from '../../../components/Header/'
import Footer from '../../../components/Footer/'
import MainCarousel from '../carousel/index'

import '../index.less'
import './business.less'

export default class About extends React.Component<{}, {}> {
  render() {
    return (
      <div className="index">
        <MainCarousel />
        <Header {...this.props} />
        <div className="main-container business-container">
          <Row>
            <Col span={12} offset={6} className="menu-content">
              <Col span={4}>
                <span className="menu">岗位外包</span>
              </Col>
              <Col span={4}>
                <span className="menu">高端猎头</span>
              </Col>
              <Col span={4}>
                <span className="menu">产品外包</span>
              </Col>
              <Col span={4}>
                <span className="menu">人士外包</span>
              </Col>
              <Col span={4}>
                <span className="menu">HR 方案</span>
              </Col>
              <Col span={4}>
                <span className="menu">代理招聘</span>
              </Col>
            </Col>
          </Row>
          <Card title="成长历程" style={{ width: '100%' }}>
            企业概括 <br />
            深圳市德仁劳务派遣有限公司具有专业人力资源管理师、会计师及精良的管理人员，凭借丰富的人力资源、广泛的搜寻渠道，储备了各类经营管理人员，专业技术人员、专门技能人员。规范的作业流程、专业化的工作团队、科学的评价标准和完善的跟踪服务，形成了劳务派遣、劳务分包、劳动政策咨询等人力资源管理服务体系有
            公司各类专业骨干人员150人，下辖招聘团队招聘团队200人公司储备有大量的劳务技术工人。公司立足深圳坪山；于2017年国家工商行政管理部门注册，注册资金300万元,
            德仁劳务派遣立足广东省珠三角本土,致力成为专业化人力资源及相关流程外包服务供应商.总部设在深圳业务辐射深圳产州、中山、惠州、三东、佛山等珠角地区,70多个城市设立服务网络,公司发展迅速内资源领域有盛誉.德仁以客户为目标,汇集业内精英,为客户提供全方位、多层次、高效率的人力资源服务.德仁充分利用本士优势和多方面系统性的渠道资源,为外商投资企业、国有企业、民营企业、私营企业等各类.企业事业单位及政府部门提供人事代理、人才派用、人才招聘、薪酬福利管理、劳动关系管理、社会保险住房公积金服务、企业补充商业保险、劳务纠纷等各类人力资源
          </Card>
        </div>
        <Footer />
      </div>
    )
  }
}
