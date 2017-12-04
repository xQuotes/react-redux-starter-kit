import * as React from 'react'
import { Row, Col } from 'antd'

import ToolsLinkBtns from './toolsLinkBtns'

export default class Index extends React.Component<{}, {}> {
  render() {
    return (
      <Row className="tools-component">
        <Col span={24} className="main-title">
          工具箱
        </Col>
        <Col span={24} className="main-contain">
          <ToolsLinkBtns />
        </Col>
      </Row>
    )
  }
}
