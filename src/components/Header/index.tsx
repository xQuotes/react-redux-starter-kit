import * as React from 'react'
import { Link } from 'react-router-dom'
import { Button, Menu } from 'antd'

import Urls from '../../common/url'

import './header.less'

export default class Header extends React.Component<any, {}> {
  state = {
    current: 'mail'
  }
  handleClick = (e: any) => {
    console.log('click ', e)
    this.setState({
      current: e.key
    })
  }
  render() {
    console.log(this.props)
    const { match: { path } } = this.props
    return (
      <div className="header">
        <div className="top">
          <Button.Group>
            <Button type="primary" ghost>
              登录
            </Button>
            <Button type="primary">注册</Button>
          </Button.Group>
        </div>
        <div className="header-nav">
          <Menu
            className="header-nav-main"
            onClick={this.handleClick}
            selectedKeys={[path]}
            mode="horizontal"
          >
            <Menu.Item key={Urls.index}>
              <Link to={Urls.index}>首页</Link>
            </Menu.Item>
            <Menu.Item key={Urls.caculator}>
              <Link to={Urls.caculator}>计算器</Link>
            </Menu.Item>
            <Menu.Item key="tools">工具箱</Menu.Item>
            <Menu.Item key="guide">造假规范</Menu.Item>
            <Menu.Item key="search">指标查询</Menu.Item>
            <Menu.Item key="ask">问答</Menu.Item>
          </Menu>
        </div>
      </div>
    )
  }
}
