import * as React from 'react'
import { Link } from 'react-router-dom'
import { Button, Menu, Dropdown } from 'antd'

import Urls from '../../common/url'

import './header.less'

const menu = (
  <Menu>
    <Menu.Item key="0">
      <Link to={Urls.mine}>
        个人中心
      </Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="1">
      <a rel="noopener noreferrer" href="#">退出登陆</a>
    </Menu.Item>
  </Menu>
);

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
    const loginStatus = true
    return (
      <div className="header">
        <div className="header-main">
          <Link to={Urls.index} style={{
            textUnderlineStyle: 'none'
          }}><div className="left">夜猫</div></Link>
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
                <Link to={Urls.caculator + '?type=701'}>计算器</Link>
              </Menu.Item>
              <Menu.Item key={Urls.guide}>
                <Link to={Urls.guide + '?type=quota'}>造价规范</Link>
              </Menu.Item>
              <Menu.Item key={Urls.search}>
                <Link to={Urls.search + '?typeName=costindex'}>指标查询</Link>
              </Menu.Item>
              {/*<Menu.Item key={Urls.ask}>
              <Link to={Urls.ask}>专业问答</Link>
            </Menu.Item>*/}
              <Menu.Item key={Urls.tools}>
                <Link to={Urls.tools}>工具箱</Link>
              </Menu.Item>
              <Menu.Item key={Urls.message}>
                <Link to={Urls.message}>招投标法规</Link>
              </Menu.Item>
            </Menu>
          </div>
          <div className="right">
            {loginStatus ? <div className="btn-group">
              <Link to={Urls.login}>
                <Button type="primary">登录</Button>
              </Link>
              <Link to={Urls.register}>
                <Button type="primary" ghost>
                  注册
              </Button>
              </Link>
            </div> :
              <Dropdown overlay={menu}>
                <div className="user-info">
                  <img src={require('../../common/images/首页/333.png')} alt="" className="avator" />
                  <div className="name">
                    熬夜不配的
                </div>
                </div>
              </Dropdown>
            }
          </div>
        </div>
      </div>
    )
  }
}
