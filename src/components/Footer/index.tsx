import * as React from 'react'

import { Row, Col } from 'antd'

import './footer.less'

export default class Footer extends React.Component<{}, {}> {
  render() {
    return (
      <div className="footer-main">
        <Row className="footer-contain">
          <Col span={4}>
            <h3>产品</h3>
            <div>产品名称1</div>
            <div>产品名称2</div>
            <div>产品名称3</div>
            <div>产品名称4</div>
          </Col>
          <Col span={4}>
            <h3>解决方案</h3>
            <div>智慧充值</div>
            <div>智慧营销</div>
          </Col>
          <Col span={4}>
            <h3>解决方案</h3>
            <div>智慧充值</div>
            <div>智慧营销</div>
          </Col>
          <Col span={7}>
            <h3>联系方式</h3>
            <div>联系电话： 1212121212121</div>
            <div>联系邮箱：ffffff@qq.com</div>
            <div>地址：冬奥哒哒哒哒冬奥哒哒哒哒冬奥哒哒哒哒冬奥哒哒哒哒冬奥哒哒哒哒</div>
          </Col>
          <Col span={4} offset={1}>
            <div style={{
              width: '155px',
              height: '155px',
              backgroundColor: '#ddd'
            }} />
          </Col>
        </Row>
      </div>
    )
  }
}
