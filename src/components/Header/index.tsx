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
    this.setState({
      current: e.key
    })
  }
  render() {
    const { match: { path } } = this.props
    return (
      <div className="header">
        <div className="header-main">
          <div className="left">夜猫</div>
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
              <Menu.Item key={Urls.tools}>
                <Link to={Urls.tools}>工具箱</Link>
              </Menu.Item>
              <Menu.Item key={Urls.guide}>
                <Link to={Urls.guide}>造价规范</Link>
              </Menu.Item>
              <Menu.Item key={Urls.search}>
                <Link to={Urls.search}>指标查询</Link>
              </Menu.Item>
              {/*<Menu.Item key={Urls.ask}>
              <Link to={Urls.ask}>专业问答</Link>
            </Menu.Item>*/}
              <Menu.Item key={Urls.message}>
                <Link to={Urls.message}>招投标法规</Link>
              </Menu.Item>
            </Menu>
          </div>
          <div className="right">
            <Link to={Urls.login}>
              <Button type="primary">登录</Button>
            </Link>
            <Link to={Urls.register}>
              <Button type="primary" ghost>
                注册
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
