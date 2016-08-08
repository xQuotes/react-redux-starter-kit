import React from 'react'
import {
  connect
} from 'react-redux'
import {
  Link
} from 'react-router'
import {
  Menu, Breadcrumb, Icon, Dropdown,
} from 'antd'
import { TreeSelect } from 'antd';
const TreeNode = TreeSelect.TreeNode;
const SubMenu = Menu.SubMenu

import Url from 'Url'
import Auth from 'Auth'

import {
  logout
} from '../login/actions'

import './dashboard.less'
@connect()
export default class Dashboard extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const menu = (
      <Menu>
        <Menu.Item key="0">
          <a href="#">第一个菜单项</a>
        </Menu.Item>
        <Menu.Item key="1">
          <a href="#">第二个菜单项</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">第三个菜单项</Menu.Item>
      </Menu>
    )
    const userMenu = (
      <Menu>
        <Menu.Item key="0">
          <a href="#">设置</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="1">
          <Link to={Url.logout}>退出</Link>
        </Menu.Item>
      </Menu>
    )
    return(
      <div className="ant-layout-aside">
        <aside className="ant-layout-sider">
          <Link to={Url.index}><div className="ant-layout-logo">
            <img className="logo-img" src="#" />
            <span className="logo-text">
              XXX 系统
            </span>
          </div></Link>
          <Menu mode="inline" theme="dark"
            defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}>
            <SubMenu key="sub1" title={<span><Icon type="bars" />导航1</span>}>
              <Menu.Item key="1"><Link to={`${Url.reportTable}`}><Icon type="appstore-o" />导航11</Link></Menu.Item>
              <Menu.Item key="2"><Link to={`${Url.reportHcharts}`}><Icon type="bar-chart" />导航12</Link></Menu.Item>
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
              <div className="ant-dropdown-link user-menu">
                {Auth.loggedIn() ? (<Dropdown overlay={userMenu} trigger={['click']}>
                  <a href="#">
                    <Icon type="user" className="user-icon"/>
                    &nbsp; {Auth.getUser()}
                    <Icon type="down" /> 
                  </a>
                </Dropdown>) : (
                  <Link to={Url.login}>
                    <Icon type="user" />&nbsp;登录
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="ant-layout-breadcrumb">
            <Breadcrumb>
              <Breadcrumb.Item>首页</Breadcrumb.Item>
              <Breadcrumb.Item>应用列表</Breadcrumb.Item>
              <Breadcrumb.Item>某应用</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="ant-layout-container">
            <div className="ant-layout-content">
              <div style={{ height: 590 }}>
                {this.props.children}
              </div>
            </div>
          </div>
          <div className="ant-layout-footer">
          xxx.com 版权所有 © 2016 某应用
          </div>
        </div>
      </div>
      )
  }
}
