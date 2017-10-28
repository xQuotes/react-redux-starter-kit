import * as React from 'react'
import { Menu } from 'antd'

import './nav.less'

export default class Header extends React.Component<any, {}> {
  state = {
    current: 'gjrj'
  }
  handleClick = (e: any) => {
    console.log('click ', e)
    this.setState({
      current: e.key
    })
  }
  render() {
    return (
      <div className="main-nav">
        <Menu
          className="main-nav-container"
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="gjrj" type="primary">
            工具软件
          </Menu.Item>
          <Menu.Item key="ppsj" type="primary">
            品牌设计
          </Menu.Item>
          <Menu.Item key="ppch" type="primary">
            品牌策划
          </Menu.Item>
          <Menu.Item key="gysj" type="primary">
            工业设计
          </Menu.Item>
          <Menu.Item key="kjsj" type="primary">
            空间设计
          </Menu.Item>
          <Menu.Item key="jmsj" type="primary">
            界面设计
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}
