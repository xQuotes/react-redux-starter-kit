import * as React from 'react'
import { Col } from 'antd'

import ToolsLinkBtns from '../../Tools/toolsLinkBtns'

import './nav.less'

export default class Header extends React.Component<any, {}> {
  state = {
    current: 'gjrj'
  }
  render() {
    return (
      <div className="main-nav">
        <Col span={24} className="main-title">
          工具箱
        </Col>
        <Col span={24}>
          <ToolsLinkBtns />
        </Col>
      </div>
    )
  }
}
