import {
  inject, observer
} from 'mobx-react'
import {
  Menu, Breadcrumb, Icon, Dropdown,
} from 'antd'
import {
  browserHistory,
  Link
} from 'react-router'
import cookie from 'react-cookie'
import { TreeSelect } from 'antd'
const TreeNode = TreeSelect.TreeNode;
const SubMenu = Menu.SubMenu
import Img from 'Img'
import './dashboard.less'

import Url from 'Url'
import Auth from 'Auth'

@inject(
  'dashboardStore',
  'userStore'
)
@observer
export default class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      current: props.location.pathname,
      user_id: props.params.id,

      meneShow: true
    }
  }
  handleClick(e) {
    this.setState({
      current: e.key
    })
  }
  logout() {
    this.props.userStore.logoutServer()

    Auth.removeAuthCookie('UserIfosSession', {
      path: '/',
      domain: 'ifos.ifengidc.com',
    })
    Auth.checkAuthCookie('UserIfosSession')
  }
  handleMenu() {
    this.setState({
      meneShow: !this.state.meneShow
    })
  }
  render() {
    const {dashboardStore, userStore} = this.props
    const {bcData} = dashboardStore
    const my = userStore
    
    const menu = (
      <Menu>
        <Menu.Item key="0">
          <a href="http://ifos.ifengidc.com/index" target="_blank">工作流管理</a>
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
    return(
      <div className="ant-layout-aside">
        <div className="layout-spinner"></div>
        <div className="mobile-menu" onClick={::this.handleMenu}
          style={{
            marginLeft: this.state.meneShow ? '230px' : 0
          }}>
          <Icon type={`menu-${this.state.meneShow ? 'fold' : 'unfold'}`} />
        </div>
        <aside className="ant-layout-sider" style={{
          display: this.state.meneShow ? 'initial' : 'none'
        }}>
          <Link to={Url.index}><div className="ant-layout-logo">
            <img className="logo-img" src={Img.LogoImg} />
            <span className="logo-text">
              {`IFOS 交换机自动化`}
            </span>
          </div></Link>
          <Menu mode="inline" theme="dark"
            onClick={this.handleClick.bind(this)}
            defaultOpenKeys={['sub1', 'sub2', 'sub3']}
            selectedKeys={[this.state.current]}>
            <SubMenu key="sub1" title={<span><Icon type="bars"/>收集信息</span>}>
              <Menu.Item key={`${Url.switchesBackups}`}>
                <Link to={`${Url.switchesBackups}`}>
                  <Icon type="appstore-o"/>备份管理
                </Link>
              </Menu.Item>
              <Menu.Item key={`${Url.switchesVlans}`}>
                <Link to={`${Url.switchesVlans}`}>
                  <Icon type="appstore-o"/>vlan信息
                </Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="bars"/>常用信息</span>}>
              <Menu.Item key={`${Url.switchesMap}`}>
                <Link to={`${Url.switchesMap}`}>
                  <Icon type="appstore-o"/>映射信息
                </Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" title={<span><Icon type="bars"/>配置管理</span>}>
              <Menu.Item key={`${Url.switchesNetwork}`}>
                <Link to={`${Url.switchesNetwork}`}>
                  <Icon type="appstore-o"/>网段管理
                </Link>
              </Menu.Item>
              <Menu.Item key={`${Url.switchesActions}`}>
                <Link to={`${Url.switchesActions}`}>
                  <Icon type="appstore-o"/>操作类型
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
                  {my.name} <Icon type="down" /> <Icon type="user" className="user-icon"/>
                </a>
              </Dropdown>
            </div>
          </div>
          <div className="ant-layout-breadcrumb">
            <Breadcrumb>
              {
                _.map(bcData, (v, k)=> {
                  return <Breadcrumb.Item key={k}>{v}</Breadcrumb.Item>
                })
              }
            </Breadcrumb>
          </div>
          <div className="ant-layout-container">
            <div className="ant-layout-content">
              <div style={{ height: '100%' }}>
                {this.props.children}
              </div>
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
