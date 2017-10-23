import * as React from 'react'
import { Menu } from 'antd'

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
      <div className="main">
        <div className="main-nav">
          <Menu
            onClick={this.handleClick}
            selectedKeys={['']}
            mode="horizontal"
          >
            <Menu.Item key="gjrj">工具软件</Menu.Item>
            <Menu.Item key="ppsj">品牌设计</Menu.Item>
            <Menu.Item key="ppch">品牌策划</Menu.Item>
            <Menu.Item key="gysj">工业设计</Menu.Item>
            <Menu.Item key="kjsj">空间设计</Menu.Item>
            <Menu.Item key="jmsj">界面设计</Menu.Item>
          </Menu>
        </div>
      </div>
    )
  }
}
