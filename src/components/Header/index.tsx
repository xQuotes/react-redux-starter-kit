import * as React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'

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
          <Link to={Urls.index}>
            <div className="left">德仁招聘</div>
          </Link>
          <div className="header-nav">
            <Menu
              className="header-nav-main"
              onClick={this.handleClick}
              selectedKeys={[path]}
              mode="horizontal"
            >
              <Menu.Item key={Urls.aboutUs}>
                <Link to={Urls.aboutUs}>
                  <div className="header-en-title">ABOUT US</div>
                  <div className="header-zh-title">关于德仁</div>
                </Link>
              </Menu.Item>
              <Menu.Item key={Urls.news}>
                <Link to={Urls.news}>
                  <div className="header-en-title">NEWS</div>
                  <div className="header-zh-title">德仁动态</div>
                </Link>
              </Menu.Item>
              <Menu.Item key={Urls.coreBusiness}>
                <Link to={Urls.coreBusiness}>
                  <div className="header-en-title">CORE BUSINESS</div>
                  <div className="header-zh-title">核心业务</div>
                </Link>
              </Menu.Item>
              <Menu.Item key={Urls.careers}>
                <Link to={Urls.careers}>
                  <div className="header-en-title">CAREERS</div>
                  <div className="header-zh-title">招贤纳士</div>
                </Link>
              </Menu.Item>
              <Menu.Item key={Urls.contactsUs}>
                <Link to={Urls.contactsUs}>
                  <div className="header-en-title">CONTACTS US</div>
                  <div className="header-zh-title">联系我们</div>
                </Link>
              </Menu.Item>
            </Menu>
          </div>
        </div>
      </div>
    )
  }
}
