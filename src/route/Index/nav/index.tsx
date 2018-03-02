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
          <div className="main-title-ch">
            <span className="main-title-line"> &nbsp;</span>
            <span>工具箱</span>
            <span className="main-title-line"> &nbsp;</span>
          </div>
          <div className="main-title-en">Tool cabinet</div>
        </Col>
        <Col span={24}>
          <ToolsLinkBtns />
        </Col>
      </div>
    )
  }
}
