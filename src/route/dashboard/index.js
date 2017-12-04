import { inject, observer } from 'mobx-react'
import { Menu, Breadcrumb, Icon, Dropdown } from 'antd'
import { browserHistory, Link } from 'react-router'
import cookie from 'react-cookie'
import { TreeSelect } from 'antd'
const TreeNode = TreeSelect.TreeNode
const SubMenu = Menu.SubMenu
import Img from 'Img'
import './dashboard.less'

import Url from 'Url'
import Auth from 'Auth'

@inject('dashboardStore', 'userStore')
@observer
export default class Dashboard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      current: props.location.pathname,

      meneShow: true
    }

    Auth.checkAuthLogin()
  }
  handleClick(e) {
    this.setState({
      current: e.key
    })
  }

  logout() {
    // this.props.userStore.logoutServer()
    Auth.logout()
    // Auth.removeAuthCookie('UserIfosSession', {
    //   path: '/',
    //   domain: 'xxx'
    // })
    // Auth.checkAuthCookie('UserIfosSession')
  }
  handleMenu() {
    this.setState({
      meneShow: !this.state.meneShow
    })
  }
  render() {
    const { dashboardStore, userStore } = this.props
    const { bcData } = dashboardStore
    const my = userStore
    const menu = (
      <Menu>
        <Menu.Item key="0">
          <a href="http://d.anyfees.com/#g=1&p=首页新" target="_blank">
            画图
          </a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="1">
          <a href="http://www.dulifei.com/kcf/kt.html" target="_blank">
            竞争对手
          </a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="2">
          <a
            href="https://note.youdao.com/group/#/47022012/(folder/141298871//full:collab/167018693)?noPush=true"
            target="_blank"
          >
            文档
          </a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">
          <a href="http://www.anyfees.com/index" target="_blank">
            首页
          </a>
        </Menu.Item>
        <Menu.Divider />
      </Menu>
    )
    const userMenu = (
      <Menu>
        <Menu.Divider />
        <Menu.Item key="1">
          <div onClick={::this.logout}>退出</div>
        </Menu.Item>
      </Menu>
    )
    return (
      <div className="ant-layout-aside">
        <div className="layout-spinner" />
        <div
          className="mobile-menu"
          onClick={::this.handleMenu}
          style={{
            marginLeft: this.state.meneShow ? '230px' : 0
          }}
        >
          <Icon type={`menu-${this.state.meneShow ? 'fold' : 'unfold'}`} />
        </div>
        <aside
          className="ant-layout-sider"
          style={{
            display: this.state.meneShow ? 'initial' : 'none'
          }}
        >
          <Link to={Url.index}>
            <div className="ant-layout-logo">
              <img className="logo-img" src={Img.LogoImg} />
              <span className="logo-text">{`计算器`}</span>
            </div>
          </Link>
          <Menu
            mode="inline"
            theme="dark"
            onClick={this.handleClick.bind(this)}
            defaultOpenKeys={['sub0', 'sub1', 'sub2', 'sub20', 'sub3', 'sub4']}
            selectedKeys={[this.state.current]}
          >
            <SubMenu
              key="sub0"
              title={
                <span>
                  <Icon type="bars" />计算器
                </span>
              }
            >
              <Menu.Item key={`${Url.calculatorList}`}>
                <Link to={`${Url.calculatorList}`}>
                  <Icon type="appstore-o" />计算器类型
                </Link>
              </Menu.Item>

              <Menu.Item key={`${Url.mapdataList}`}>
                <Link to={`${Url.mapdataList}`}>
                  <Icon type="appstore-o" />造价咨询费计算器
                </Link>
              </Menu.Item>

              {/* <Menu.Item key={`${Url.tableList}`}>
                <Link to={`${Url.tableList}`}>
                  <Icon type="appstore-o" />计算器列表
                </Link>
              </Menu.Item> */}

              <Menu.Item key={`${Url.formulaList}`}>
                <Link to={`${Url.formulaList}`}>
                  <Icon type="appstore-o" />计算公式
                </Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="bars" />造价指标
                </span>
              }
            >
              <Menu.Item key={`${Url.newsList}`}>
                <Link to={`${Url.newsList}`}>
                  <Icon type="appstore-o" />造价指标列表
                </Link>
              </Menu.Item>
            </SubMenu>

            <SubMenu
              key="sub20"
              title={
                <span>
                  <Icon type="bars" />造价规范
                </span>
              }
            >
              <Menu.Item key={`${Url.guidedataList}`}>
                <Link to={`${Url.guidedataList}`}>
                  <Icon type="appstore-o" />造价规范列表
                </Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="bars" />用户管理
                </span>
              }
            >
              <Menu.Item key={`${Url.userList}`}>
                <Link to={`${Url.userList}`}>
                  <Icon type="appstore-o" />列表
                </Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </aside>
        <div className="ant-layout-main">
          <div className="ant-layout-header">
            <div className="header-left">
              <Dropdown overlay={menu} trigger={['click']}>
                <a className="ant-dropdown-link other-os" href="#">
                  其它系统 <Icon type="down" />
                </a>
              </Dropdown>
            </div>
            <div className="header-right">
              <Dropdown overlay={userMenu} trigger={['click']}>
                <a className="ant-dropdown-link user-menu" href="#">
                  {Auth.getUserName()} <Icon type="down" />{' '}
                  <Icon type="user" className="user-icon" />
                </a>
              </Dropdown>
            </div>
          </div>
          <div className="ant-layout-breadcrumb">
            <Breadcrumb>
              {_.map(bcData, (v, k) => {
                return <Breadcrumb.Item key={k}>{v}</Breadcrumb.Item>
              })}
            </Breadcrumb>
          </div>
          <div className="ant-layout-container">
            <div className="ant-layout-content">
              <div style={{ height: '100%' }}>{this.props.children}</div>
            </div>
          </div>
          <div className="ant-layout-footer">
            ifeng.com 版权所有 © 2016 凤凰网运维中心
          </div>
        </div>
      </div>
    )
  }
}
