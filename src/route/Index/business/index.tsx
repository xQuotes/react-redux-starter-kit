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
          <Card title="委托招聘" className="business-deren">
            <p>委托招聘是人才服务机构利用人力资源，为企业提供刷选好所需的符合企业招聘需求的人才。
            <br />相对与猎头招聘，委托招聘是普通人才的筛选招聘，或者俗称：小猎头。
            <br />委托招聘可以减少招聘公司在招聘过程中所花费的时间，人力和财力，同时面试人员经过专业人才机构筛选后，就业成功率高。
            <br />通常大部分人才机构都有委托招聘服务，例如：北京市人才市场，南京奥成人才，第二代招聘平台，即时互动招聘平台，好前程人才网等机构，价格也从几十元到几千元每人不等。
            </p>

            <div className="item">
              <h4>招聘更具针对性：</h4>
              <p>直接针对企业需求，所推荐的人才素质较高，更符合企业要求。</p>
            </div>

            <div className="item">
              <h4>快捷简易：</h4>
              <p>使企业节省繁杂的筛选，面试环节，减少人员的投入，避免重复操作，节省大量工作时间，招聘事宜，快捷，简易。</p>
            </div>

            <div className="item">
              <h4>节省招聘成本：</h4>
              <p>节省公司宣传成本，电话沟通成本，面试成本，人员投入成本，时间成本等。</p>
            </div>

            <div className="item">
              <h4>降低招聘风险：</h4>
              <p>有效避免人才因不合适企业的发展而被辞退，帮助企业实现人事工作的标准化和流程化，提高工作效率。</p>
            </div>

            <div className="item">
              <h4>新型人才：</h4>
              <p>顺应电子商务时代的发展，为企业选定的人才给予专业培训，帮助企业打破传统营销模式，实现国际化的网络营销。</p>
            </div>

            <div className="item">
              <h4>委托招聘服务细则：</h4>
              <p>分析客户岗位需求和市场形势，设计招聘方案，保证良好的招聘成果。</p>
            </div>
          </Card>

          <Card title="临时性招聘" className="business-deren">
            <p>委托招聘是人才服务机构利用人力资源，为企业提供刷选好所需的符合企业招聘需求的人才。
            <br />相对与猎头招聘，委托招聘是普通人才的筛选招聘，或者俗称：小猎头。
            <br />委托招聘可以减少招聘公司在招聘过程中所花费的时间，人力和财力，同时面试人员经过专业人才机构筛选后，就业成功率高。
            <br />通常大部分人才机构都有委托招聘服务，例如：北京市人才市场，南京奥成人才，第二代招聘平台，即时互动招聘平台，好前程人才网等机构，价格也从几十元到几千元每人不等。
            </p>

            <div className="item">
              <h4>招聘更具针对性：</h4>
              <p>直接针对企业需求，所推荐的人才素质较高，更符合企业要求。</p>
            </div>

            <div className="item">
              <h4>快捷简易：</h4>
              <p>使企业节省繁杂的筛选，面试环节，减少人员的投入，避免重复操作，节省大量工作时间，招聘事宜，快捷，简易。</p>
            </div>

            <div className="item">
              <h4>节省招聘成本：</h4>
              <p>节省公司宣传成本，电话沟通成本，面试成本，人员投入成本，时间成本等。</p>
            </div>

            <div className="item">
              <h4>降低招聘风险：</h4>
              <p>有效避免人才因不合适企业的发展而被辞退，帮助企业实现人事工作的标准化和流程化，提高工作效率。</p>
            </div>

            <div className="item">
              <h4>新型人才：</h4>
              <p>顺应电子商务时代的发展，为企业选定的人才给予专业培训，帮助企业打破传统营销模式，实现国际化的网络营销。</p>
            </div>

            <div className="item">
              <h4>委托招聘服务细则：</h4>
              <p>分析客户岗位需求和市场形势，设计招聘方案，保证良好的招聘成果。</p>
            </div>
          </Card>
        </div>
        <Footer />
      </div>
    )
  }
}
