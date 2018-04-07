import React from 'react'
import { Menu } from 'antd'

export default class MineMenu extends React.Component {
  state = {
    current: 'mail',
  }
  handleClick = (e: any) => {
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
          <img src={require('../../common/images/menu/personal.png')} className="menu-icon" /> 个人信息
        </Menu.Item>
        <Menu.Item key="voucher">
          <img src={require('../../common/images/menu/coupon.png')} className="menu-icon" /> 我的抵扣券
        </Menu.Item>
        <Menu.Item key="order">
          <img src={require('../../common/images/menu/order.png')} className="menu-icon" />我的订单
        </Menu.Item>
        <Menu.Item key="password">
          <img src={require('../../common/images/menu/password.png')} className="menu-icon" />设置密码
        </Menu.Item>
      </Menu>
    );
  }
}