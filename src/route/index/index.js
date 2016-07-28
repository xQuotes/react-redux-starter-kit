import React from 'react'
import {
  Menu, Breadcrumb, Icon, Dropdown,
} from 'antd'
import { TreeSelect } from 'antd';
const TreeNode = TreeSelect.TreeNode;
const SubMenu = Menu.SubMenu
import Dashboard from '../dashboard/index'

class Index extends React.Component {
  render() {
    return(
      <div>
        <Dashboard {...this.props}/>
      </div>
      )
  }
}

module.exports = Index
