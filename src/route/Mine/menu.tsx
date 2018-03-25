import React from 'react'
import { Menu, Icon } from 'antd'

export default class MineMenu extends React.Component {
  state = {
    current: 'mail',
  }
  handleClick = (e: any) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
      >
        <Menu.Item key="info">
          <Icon type="mail" />个人信息
        </Menu.Item>
        <Menu.Item key="voucher">
          <Icon type="appstore" />我的抵扣券
        </Menu.Item>
        <Menu.Item key="order">
          <Icon type="mail" />我的订单
        </Menu.Item>
        <Menu.Item key="password">
          <Icon type="appstore" />设置密码
        </Menu.Item>
      </Menu>
    );
  }
}