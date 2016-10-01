import {
  Menu, Breadcrumb, Icon, Dropdown,
} from 'antd'
import {
  connect
} from 'react-redux'
import {
  browserHistory,
  Link
} from 'react-router'
import cookie from 'react-cookie'
const SubMenu = Menu.SubMenu
import './dashboard.less'

import Url from 'Url'
import Auth from 'Auth'

import {
  logout
} from '../auth/actions'

@connect((state)=>({
  dashboard: state.dashboard
}))
export default class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      current: props.location.pathname,
      user_id: props.params.id
    }
  }
  handleClick(e) {
    this.setState({
      current: e.key
    })
  }
  logout() {
    const {dispatch} = this.props
    dispatch(logout())
    cookie.remove('UserIfosSession', {
      path: '/',
      domain: 'ifos.ifengidc.com',
    })
    location.reload()
  }
  render() {
    const {dashboard} = this.props
    // const {data: my} = me
    const {bcData} = dashboard
    
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
        <aside className="ant-layout-sider">
          <Link to={Url.index}><div className="ant-layout-logo">
            <img className="logo-img" src={''} />
            <span className="logo-text">
              Admin
            </span>
          </div></Link>
          <Menu mode="inline" theme="dark"
            onClick={this.handleClick.bind(this)}
            defaultOpenKeys={['sub1']}
            selectedKeys={[this.state.current]}>
            <SubMenu key="sub1" title={<span><Icon type="bars"/>Admin</span>}>
              <Menu.Item key={`${Url.index}`}>
                <Link to={`${Url.index}`}>
                  <Icon type="appstore-o"/>Admin
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
                  {''} <Icon type="down" /> <Icon type="user" className="user-icon"/>
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
          qiai.cn.com 版权所有 © 2016 QIAI.CN.COM
          </div>
        </div>
      </div>
      )
  }
}
