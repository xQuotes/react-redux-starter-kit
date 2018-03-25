import * as React from 'react'
import { Button } from 'antd'
import Header from '../../components/Header/'
import Footer from '../../components/Footer/'

import MineMenu from './menu'
import MineInfo from './info'

import './mine.less'

export default class Mine extends React.Component<{}, {}> {
  render() {
    return (
      <div className="mine">
        <Header {...this.props} />
        <div className="main-container">
          <div className="left-menu">
            <div className="info">
              <img src={require('../../common/images/首页/333.png')} alt="" className="avator" />
              <div className="name">
                熬夜不配的冬天
              </div>
              <div className="huiyuan">
                <img src={require('../../common/images/首页/333.png')} alt="" className="huiyuan-icon" />
                <span className="huiyuan-label">
                  普通会员
                </span>
              </div>
            </div>
            <MineMenu />
            <div className="vip-btn">
              <Button>开通 VIP</Button>
            </div>
          </div>
          <div className="right-content">
            <MineInfo />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
